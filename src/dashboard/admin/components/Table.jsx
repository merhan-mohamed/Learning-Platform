import React from 'react'

const Table = ({columns , children}) => {
  return (
    <div className='bg-white rounded-xl shadow overflow-hidden'>
      <table className='w-full border-collapse'>
        <thead className='bg-gray-50'>
          <tr>
            {columns.map((col , index)=>(
              <th 
              key={index}
              className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wide'
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-100'>
          {children}
        </tbody>
      </table>
    </div>
  )
}

export default Table