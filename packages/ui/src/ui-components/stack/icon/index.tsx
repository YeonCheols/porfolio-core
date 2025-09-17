import { StackIconProps } from '../../../types/icon';
import { cn, getIconComponent } from '../../../utils';

export function StackIcon({ name, icon, color = '', size = 20, className = '' }: StackIconProps): JSX.Element {
  if (!icon) {
    return (
      <div
        className={cn(`bg-gray-200 dark:bg-gray-700 rounded`, className)}
        style={{ width: size, height: size }}
        title={name}
      />
    );
  }
  const IconComponent = getIconComponent(icon);

  // NOTE: 아이콘을 찾을 수 없는 경우
  if (!IconComponent) {
    return (
      <div
        className={cn(`bg-gray-200 dark:bg-gray-700 rounded`, className)}
        style={{ width: size, height: size }}
        title={name}
      />
    );
  }

  return <IconComponent size={size} className={`${color} ${className}`} title={name} />;
}

export default StackIcon;
