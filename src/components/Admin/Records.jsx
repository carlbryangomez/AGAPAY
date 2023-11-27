import React from 'react'
import PaginationTable from '../Responder/PaginationTable'
import RecordCards from '../Shared/RecordCards'
const AdminRecords = () => {
  return (
    <>                    <section className="bg-white min-h-screen sm:my-0 my-10">
    <div className="p-4 sm:ml-64">
    <RecordCards />
    <PaginationTable />
    </div>
    </section>

    </>
  )
}

export default AdminRecords