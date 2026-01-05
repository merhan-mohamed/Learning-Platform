import React from 'react'

const ExamsHeder = ({onAdd}) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        {/* Title */}
        <div>
            <h1 className="text-2xl font-bold text-gray-800">
                Exams Management
            </h1>
            <p className="text-sm text-gray-500">
                Manage all Exams and their associated questions
            </p>
        </div>

        {/* Actions */}
        <button 
        onClick={onAdd}
        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium'
        >
            + Add Exam
        </button>
    </div>
  )
}

export default ExamsHeder