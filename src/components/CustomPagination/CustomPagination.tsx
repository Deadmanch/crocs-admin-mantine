import React from 'react';
import { Pagination } from '@mantine/core';

interface PaginationProps {
  total: number;
  value: number; // Изменено с 'page' на 'value'
  onPageChange: (page: number) => void;
}

export const CustomPagination: React.FC<PaginationProps> = ({ total, value, onPageChange }) => {
  if (total === 0) {
    return null; // Если элементов нет, не показывать пагинацию
  }

  return (
    <Pagination
      radius="xs"
      size="lg"
      color="var(--primary)"
      total={total}
      value={value}
      onChange={onPageChange}
    />
  );
};
