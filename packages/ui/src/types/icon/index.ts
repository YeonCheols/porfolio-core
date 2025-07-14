import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

export interface StackType {
  id?: number;
  name: string;
  icon: string;
  color: string;
}
export interface StackIconProps {
  name: string;
  icon: string;
  color?: string;
  size?: number;
  className?: string;
}
export interface StackTagProps {
  name: string;
  icon: string;
  color?: string;
  size?: number;
  className?: string;
  showName?: boolean;
}

export interface StackSelectorProps<T> {
  stacks: Array<T>;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
  errors: FieldErrors<any>;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  maxStacks?: number;
}
