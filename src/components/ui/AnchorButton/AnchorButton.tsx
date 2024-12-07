import { IconPlus } from '@tabler/icons-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './AnchorButton.module.css';

interface IAnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const AnchorButton = ({ href = '#', className, children, ...props }: IAnchorButtonProps) => {
  return (
    <Link to={href} className={clsx(className, styles.link)} {...props}>
      <IconPlus size={16} className={styles.icon} />
      {children}
    </Link>
  );
};
