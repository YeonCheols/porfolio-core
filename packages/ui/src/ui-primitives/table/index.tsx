'use client';

import { TableProps } from '@/types/table';

const Table = ({ children }: TableProps) => {
  return (
    <div className="table-container">
      <table className="table w-full">{children}</table>
    </div>
  );
};

export default Table;
