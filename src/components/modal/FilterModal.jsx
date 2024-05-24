import React from 'react'
import { Link } from 'react-router-dom'

function FilterModal({ filterOpen, setFilterOpen }) {
  return (
    <div className={`filter ${filterOpen && 'active'}`}>
      <div onClick={() => setFilterOpen(false)} className="filter-bg"></div>
      <div className={`filter-content ${filterOpen && 'active'}`}>

      </div>
    </div>
  )
}

export default FilterModal