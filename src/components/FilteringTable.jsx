import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { ChevronUpIcon, ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { GlobalFilter } from './GlobalFilter';
const FilteringTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({
        columns,
        data,
    },
    useGlobalFilter,useSortBy);

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow,state,setGlobalFilter, } = tableInstance;
    const {globalFilter} = state
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div className="container mx-auto my-10">
            <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 text-center">
                <thead className="bg-gray-100">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="py-2 px-4 font-semibold ">
                                    {column.render('Header')}
                                    <span className="flex items-center">
    {column.isSorted ? (
        column.isSortedDesc ? (
            <ChevronDownIcon className="" /> // Downward arrow icon in red color
        ) : (
            <ChevronUpIcon className="" /> // Upward arrow icon in green color
        )
    ) : (
        <ChevronUpDownIcon className="" /> // Default arrow icon in gray color
    )}
</span>

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

export default FilteringTable;
