/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const FilterBTN = ({ name, index, item, setPageNumber, task }) => {
    return (

        <div>
            <style jsx>
                {`


                .x:checked + label{
                    background-color: #0b5ed7;
                    color:white
                }

                input[type="radio"]{
                    display:none
                }
                `}
            </style>
            <div className="form-check">
                <input className="form-check-input x"
                    onClick={() => {
                        setPageNumber(1)
                        task(item)
                    }}
                    type="radio"
                    name={name}
                    id={`${name}-${index}`} />
                <label className="btn btn-outline-primary" for={`${name}-${index}`}>
                    {item}
                </label>
            </div>
        </div>
    )
}

export default FilterBTN
