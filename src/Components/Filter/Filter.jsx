/* eslint-disable react/prop-types */
import Gender from "./Category/Gender"
import Species from "./Category/Species"
import Status from "./Category/Status"


const Filter = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () =>{
    setStatus ("")
    setGender ("")
    setSpecies("")
  }
  return (
    <div className='col-3' style={{ color: "white" }}>
      <div className="text-center fw-bold fs-4 ">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className="text-center text-primary text-decoration-underline fs-4">Clear
      </div>
      <div style={{ color: 'white', backgroundColor: 'blue' }} className="accordion" id="accordionExample">

        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
  )
}

export default Filter
