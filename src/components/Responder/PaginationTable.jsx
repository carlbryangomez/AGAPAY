import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { ChevronUpIcon, ChevronDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, MagnifyingGlassCircleIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
const GlobalFilter = ({ className, filter, setFilter }) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor="table-search" className="sr-only">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                   <MagnifyingGlassCircleIcon className='w-6 h-6 text-primary' />
                </div>
                <input
                    type="text"
                    id="table-search"
                    className="block p-2 pl-10 w-full max-w-sm text-sm text-gray border border-gray/20 rounded-lg bg-subtlegray focus:ring-white focus:border-primary "
                    placeholder="Search for users"
                    value={filter || ''}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
        </div>
    );
};

const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 }, 
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        canNextPage,
        previousPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <div className="p-4 font-inter">
<div className="flex flex-col md:flex-row sm:justify-between justify-center mb-3 items-center mt-4">
    <div className="flex flex-row flex-wrap items-center mb-2">
        <label className="mr-2">Show:</label>
        <select
            className="border border-gray/20 px-2 py-1 rounded-md text-sm mb-2 md:mb-0"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            aria-label="Select number of items per page"
        >
            {[10, 25, 50].map((size) => (
                <option key={size} value={size}>
                    {size}
                </option>
            ))}
        </select>
    </div>
    <div className="flex flex-row items-center">
        <GlobalFilter className="font-bold mr-2 mb-2 md:mb-0" filter={globalFilter} setFilter={setGlobalFilter} />
        {/* <p className="hidden md:block mr-2 mb-0">
            Go to Page:{' '}
            <input
                type="number"
                className="border border-gray/20 px-2 py-1 rounded-xl text-sm"
                value={pageIndex + 1}
                onChange={(e) => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(pageNumber);
                }}
            />
        </p> */}
    </div>
</div>


                    <div>
</div>
            <table {...getTableProps()} className="w-full text-center border border-gray/30 p-5">
            <thead className=" bg-primary/50 ">
    {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3   text-sm font-bold">
                    <div className="flex items-center justify-center font-inter ">
                        {column.render('Header')}
                        <span className="">
                            {column.isSorted ? (
                                column.isSortedDesc ? (
                                    <ChevronDownIcon className=" ml-3 w-5 h-5 text-red" />
                                ) : (
                                    <ChevronUpIcon className=" ml-3 w-5 h-5 text-secondary" />
                                )
                            ) : (
                                <ChevronUpDownIcon className=" ml-3 w-5 h-5 text-black/50" />
                            )}
                        </span>
                    </div>
                </th>
            ))}
        </tr>
    ))}
</thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="bg-white  border-b border-gray/20">
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} className="py-3">
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="flex sm:justify-between justify-center sm:flex-row flex-col-reverse items-center mt-4">
                <div className="flex justify-center items-center">
                   <p>Showing page <strong>{pageIndex + 1}</strong> of  {pageOptions.length} </p>
                  
                


                </div>
                <div className="flex space-x-2 ">
                    <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        className={`${
                            !canPreviousPage ? 'cursor-not-allowed text-gray-300' : 'hover:text-gray-600'
                        }`}
                    >
                        <ChevronDoubleLeftIcon className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className={`${
                            !canPreviousPage ? 'cursor-not-allowed text-gray-300' : 'hover:text-gray-600'
                        } bg-primary hover:bg-primarydark px-2 py-2 rounded-xl text-white font-inter`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className={`${
                            !canNextPage ? 'cursor-not-allowed text-gray-300' : 'hover:text-gray-600'
                        } bg-primary hover:bg-primarydark px-2 py-2 rounded-xl text-white font-inter`}
                    >
                        Next
                    </button>
                    <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                        className={`${
                            !canNextPage ? 'cursor-not-allowed text-gray-300' : 'hover:text-gray-600'
                        }`}
                    >
                        <ChevronDoubleRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginationTable;
