import { classNamesWithRoot } from '@bossmon/utils';
import styles from './index.module.scss';

export interface StackProps {}

const cx = classNamesWithRoot(styles, 'stack')

function Stack({}: StackProps) {
    return <div className={cx()}></div>;
}

export default Stack

