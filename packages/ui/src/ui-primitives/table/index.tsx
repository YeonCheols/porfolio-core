'use client';

import { type TableProps } from '@/types/table';

function Table({ children }: TableProps) {
  return (
    <div className="table-container">
      <table className="table w-full">{children}</table>
    </div>
  );
}

export default Table;
