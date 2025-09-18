import { type ComponentType } from 'react';
import { iconLibraries } from '../constant/icon';

// 아이콘 이름을 파싱하는 함수
export function parseIconName(iconName: string): { library: string; name: string } | null {
  const match = /^(?:[A-Z][a-z])(?<name>.+)$/.exec(iconName);
  if (!match) return null;
  const { name } = match.groups!;
  const library = iconName.slice(0, 2);
  return { library, name };
}

// 아이콘 컴포넌트를 가져오는 함수
export function getIconComponent(iconName: string): ComponentType<any> | null {
  const parsed = parseIconName(iconName);
  if (!parsed) return null;

  const { library, name } = parsed;
  const iconLibrary = iconLibraries[library as keyof typeof iconLibraries];

  return (iconLibrary as Record<string, ComponentType<any>>)[library + name];
}
