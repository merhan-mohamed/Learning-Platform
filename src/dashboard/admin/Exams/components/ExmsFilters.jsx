import React from 'react'

const ExmsFilters = ({
    search,
    setSearch,
    classFilter,
    setClassFilter,
    setSatusFilter
}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {/* Search */}
        <input 
        type="text" 
        placeholder='Search exam by title......'
        className='border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />

        {/* Class Filter */}
        <select 
        className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
        value={classFilter}
        onChange={(e) => setClassFilter(e.target.value)}
        >
            <option value="">All Classes</option>
            <option value="Grade 1 Secondary">Grade 1 Secondary</option>
            <option value="Grade 2 Secondary">Grade 2 Secondary</option>
            <option value="Grade 3 Secondary">Grade 3 Secondary</option>
        </select>


        {/* Status Filter */}
        <select 
        className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
        value={classFilter}
        onChange={(e) => setSatusFilter(e.target.value)}
        >
            <option value="">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
        </select>
    </div>
  )
}

export default ExmsFilters