import { IconDots, IconEdit, IconTrashX } from '@tabler/icons-react';
import { Button, Menu } from '@mantine/core';
import styles from './ToggleMenu.module.css';

interface IProps {
  id: number;
  href: string;
  onDelete: (id: number) => void;
}
export const ToggleMenu = ({ id, href, onDelete }: IProps) => {
  return (
    <Menu position="bottom" radius="md" withArrow shadow="md" width={200}>
      <Menu.Target>
        <Button className={styles.button}>
          <IconDots size={14} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>
        <Menu.Item component="a" href={href} leftSection={<IconEdit size={14} />}>
          Edit
        </Menu.Item>
        <Menu.Item onClick={() => onDelete(id)} color="red" leftSection={<IconTrashX size={14} />}>
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
