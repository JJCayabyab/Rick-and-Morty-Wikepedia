/* eslint-disable no-unused-vars */

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css'
import Filter from "./Components/Filter/Filter"
import Cards from "./Components/Cards/Cards"
import React, { useState, useEffect } from 'react'
import Pagination from "./Components/Pagination/Pagination"
import Search from "./Components/Search/Search"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes'
import Locations from './Pages/Locations'
import CardInfo from "./Components/Cards/CardInfo"

//the main function component
function App() {
  return (
    <Router>
      <div className="App mb-3">
        <Navbar /> 
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<CardInfo/>}/>

        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/episodes/:id' element={<CardInfo/>}/>

        <Route path='/locations' element={<Locations/>}/>
        <Route path='/locations/:id' element={<CardInfo/>}/>
      </Routes>
    </Router>

  )
}


const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")
  let [search, setSearch] = useState("")//hold the input in the search bar for filtering
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  let [fetchedData, setFetchedData] = useState([]) // this will hold the character info
  let { info, results } = fetchedData //destructe fetchedData 

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)
    })()
  }, [api])

  return (

    <div style={{ color: "white" }} className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filter
            setGender={setGender}
            setStatus={setStatus}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber} />
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>

  )
}

export default App
