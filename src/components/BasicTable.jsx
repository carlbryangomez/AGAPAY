import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({
        columns,
        data,
    });

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = tableInstance;

    return (
        <>
        <div className="container mx-auto my-10">
            <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="py-2 px-4 font-semibold text-left">
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} className="py-2 px-4 border-b border-gray-300">
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map(footerGroup =>(
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                            {column.render('Footer') }
                                    </td>
                                ))
                            }
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
         </>
    );
};

export default BasicTable;
