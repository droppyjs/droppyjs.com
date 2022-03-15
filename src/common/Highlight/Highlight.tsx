import styles from './Highlight.module.css';
import { HighlightProps } from './Highlight.types';

const Highlight = ({ children }: HighlightProps) => {
  return <span className={styles.highlight}>{children}</span>
}

export default Highlight;
