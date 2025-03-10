/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = ({ setStatus, setPageNumber }) => {

    let status = ["Alive", "Dead", "Unknown"]
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Status
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">

                <div className="accordion-body d-flex flex-wrap gap-2">
                    {status.map((item, index) => (
                        <FilterBTN
                            key={index}
                            name="status"
                            setPageNumber={setPageNumber}
                            index={index}
                            item={item}
                            task={setStatus}
                        />))}
                </div>

            </div>
        </div>
    )
}

export default Status
