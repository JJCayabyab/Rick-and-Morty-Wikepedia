/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Cards from '../Components/Cards/Cards'
import InputGroup from '../Components/Filter/Category/InputGroup'
const Episodes = () => {
  let [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([])
  let { air_date, name } = info
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
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
          Episode Name: <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>

        <h5 style={{ fontWeight: "400" }} className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>

      </div>

      <div className="row text-white" >
        <div className="col-3">
          <div className="text-center mb-3">
            Pick Episodes
          </div>
          <InputGroup setID={setID} total = {51} name={"Episode"}/>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/episodes/" results={results}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Episodes
