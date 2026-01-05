import React from 'react'
import { Pencil , Trash2 } from 'lucide-react'

const TableActions = () => {
  return (
    <div className='flex items-center gap-2'>
      <button className='p-2 rounded-lg hover:bg-gray-100 text-blue-600 transition'>
        <Pencil size={16} />
      </button>

      <button className='p-2 rounded-lg hover:bg-gray-100 text-red-600 transition'>
        <Trash2 size={16} />
      </button>
    </div>
  )
}

export default TableActions