import type { IconBaseProps } from 'react-icons';
import visactor from '../assets/stack/visactor.svg';
import zustand from '../assets/stack/zustand.png';

function BrandIcon({ source, name, size = 20, title, ...props }: IconBaseProps & { source: string; name: string }) {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 128 128" role="img" aria-label={title ?? name}>
      <title>{title ?? name}</title>
      <image href={source} width="128" height="128" preserveAspectRatio="xMidYMid meet" />
    </svg>
  );
}

export function PfZustand(props: IconBaseProps) {
  return <BrandIcon {...props} source={zustand} name="Zustand" />;
}

export function PfVisactor(props: IconBaseProps) {
  return <BrandIcon {...props} source={visactor} name="VisActor" />;
}
