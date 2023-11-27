import React from 'react'
import RecordCards from '../Shared/RecordCards';
import PaginationTable from './PaginationTable';
const ResponderRecords = () => {
  return (
    <>
             <section className="bg-white min-h-screen">
        <div className="p-4 sm:ml-64 mt-16">
       <RecordCards />
          <PaginationTable />
        </div>
        
      </section>
    </>
  )
}

export default ResponderRecords