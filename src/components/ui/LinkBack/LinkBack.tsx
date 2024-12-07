import { IconChevronLeft } from '@tabler/icons-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './LinkBack.module.css';

interface ILinkBackProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}
export const LinkBack = ({ title, href, className, ...props }: ILinkBackProps) => {
  return (
    <Link to={href} className={clsx(className, styles.link)} {...props}>
      <IconChevronLeft className={styles.icon} />
      {title}
    </Link>
  );
};
