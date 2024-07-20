/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ setPageNumber, pageNumber, info }) => {



  //clicking next
  let next = () => {
    setPageNumber((x) => x + 1)
  }

  //clicking prev
  //will update page number and useEffect on App.jsx will run
  let prev = () => {
    if (pageNumber == 1) {
      setPageNumber((x) => x - 0)
    } else {
      setPageNumber((x) => x - 1)
    }

  }

  return (
    <ReactPaginate 
    
      className="pagination justify-content-center gap-1 "
      pageCount={info?.pages}

      nextLinkClassName="text-light text-decoration-none"
      previousLinkClassName="text-light text-decoration-none"
      
      nextLabel="Next"
      previousLabel="Prev"
      
      pageClassName="page-item"
      pageLinkClassName="page-link bg-secondary border-secondary text-light"

      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"

      activeLinkClassName="active"
      
      onPageChange={(data) => {
        setPageNumber(data.selected+1)
      }}
  
    />/* question marks means if info exist, then add the pages
                                            this prevents the page from not loading when refreshed */
  )
}

export default Pagination
