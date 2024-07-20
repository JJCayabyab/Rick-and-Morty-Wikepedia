/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Cards from '../Components/Cards/Cards'
import InputGroup from '../Components/Filter/Category/InputGroup'

const Location = () => {
  let [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([])

  let {  name,type,dimension } = info
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res)=> res.json())
        })
      )

      setResults(a)
    })()
  }, [api])
  return (

    <div className="container">
      <div className="row text-white">
        <h1 className="text-center">
         Location: <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>

        <h5 style={{ fontWeight: "400" }} className="text-center">
            Dimensions: {dimension} <br></br>Type:{type}
        </h5>

      </div>

      <div className="row text-white" >
        <div className="col-3">
          <div className="text-center mb-3">
            Pick Episodes
          </div>
          <InputGroup setID={setID} total = {126} name="Location"/>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/locations/" results={results}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Location
