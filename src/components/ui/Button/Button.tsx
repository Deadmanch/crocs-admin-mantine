import { IconPlus } from '@tabler/icons-react';
import clsx from 'clsx';
import { Button as MantineButton } from '@mantine/core';
import styles from './Button.module.css';

type ButtonTypes = 'primary' | 'ghost' | 'table';
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonType?: ButtonTypes;
  icon?: boolean;
}
export const Button = ({
  children,
  className,
  ButtonType = 'primary',
  icon,
  ...props
}: IButtonProps) => {
  return (
    <MantineButton
      className={clsx(styles.button, className, styles[ButtonType])}
      leftSection={icon && <IconPlus />}
      {...props}
    >
      {children}
    </MantineButton>
  );
};
