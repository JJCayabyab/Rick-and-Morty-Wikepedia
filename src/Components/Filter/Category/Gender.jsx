/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Accordion.css'
import FilterBTN from '../FilterBTN'


const Gender = ({setGender,setPageNumber}) => {
    let gender = ["Female", "Male", "Genderless", "Unknown"]
    return (
        <div className="accordion-item " >
            <h2 className="accordion-header " id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Gender
                </button>
            </h2>
            <div id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">

                <div className="accordion-body d-flex flex-wrap gap-2">
                    {gender.map((item, index) => (
                    <FilterBTN  
                    task={setGender}
                    setPageNumber={setPageNumber}
                    key={index} 
                    name="gender" 
                    index={index} 
                    item={item} />))}
                </div>
            </div>
        </div>
    )
}

export default Gender
