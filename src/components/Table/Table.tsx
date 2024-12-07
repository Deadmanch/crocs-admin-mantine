import clsx from 'clsx';
import { Table as MantineTable } from '@mantine/core';
import { ToggleMenu } from '@/components';
import { formattedDate } from '@/helpers/formattedDate';
import styles from './Table.module.css';

type List = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

interface TableProps extends React.HtmlHTMLAttributes<HTMLTableElement> {
  lists?: List[];
  href: string
  onDelete: (id: number) => void;
}

export function Table({ className, lists, href, onDelete, ...props }: TableProps) {
  const rows = [];
  {
    lists &&
      lists.length > 0 &&
      rows.push(
        lists.map((list) => (
          <MantineTable.Tr key={list.id}>
            <MantineTable.Td>{list.id}</MantineTable.Td>
            <MantineTable.Td>{list.name}</MantineTable.Td>
            <MantineTable.Td>{formattedDate(list.createdAt)}</MantineTable.Td>
            <MantineTable.Td>{formattedDate(list.updatedAt)}</MantineTable.Td>
            <MantineTable.Td>
              <ToggleMenu id={list.id} href={`${href}/${list.id}`} onDelete={onDelete} />
            </MantineTable.Td>
          </MantineTable.Tr>
        ))
      );
  }

  return (
    <MantineTable className={clsx(className, styles.table)} {...props}>
      <MantineTable.Thead>
        <MantineTable.Tr>
          <MantineTable.Th>ID</MantineTable.Th>
          <MantineTable.Th>Name</MantineTable.Th>
          <MantineTable.Th>Created at</MantineTable.Th>
          <MantineTable.Th>Updated at</MantineTable.Th>
          <MantineTable.Th>Actions</MantineTable.Th>
        </MantineTable.Tr>
      </MantineTable.Thead>
      <MantineTable.Tbody>{rows}</MantineTable.Tbody>
    </MantineTable>
  );
}
