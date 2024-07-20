/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import FilterBTN from '../FilterBTN'

const Species = ({ setSpecies, setPageNumber }) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Robot",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet"
    ]

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Species
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-2 ">
                    {species.map((item, index) => (
                        <FilterBTN
                            key={index}
                            name="species"
                            index={index}
                            item={item}
                            task={setSpecies}
                            setPageNumber={setPageNumber}
                        />))}

                </div>
            </div>
        </div>
    )
}

export default Species
