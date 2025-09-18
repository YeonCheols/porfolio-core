import { StackIcon } from '@/ui-components';
import { type StackTagProps } from '@/types/icon';

export function StackTag({
  name,
  icon,
  color = '',
  size = 16,
  className = '',
  showName = true,
}: StackTagProps): JSX.Element {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <StackIcon name={name} icon={icon} color={color} size={size} />
      {showName ? <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span> : null}
    </div>
  );
}

export default StackTag;
