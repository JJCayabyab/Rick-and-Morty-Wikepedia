/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles  from './Search.module.css'
const Search = ({setSearch,setPageNumber}) => {


    
  return (
    <form className="d-flex justify-content-center mb-4">
        <input onChange={(e) => {
            setSearch(e.target.value)
            setPageNumber(1)
        }} type="text" className={`${styles.input} `} placeholder="Search for character"/>
        <button onClick={(e) =>{
            e.preventDefault()
        }} className="btn btn-primary ">Search</button>
    </form>
  )
}

export default Search
