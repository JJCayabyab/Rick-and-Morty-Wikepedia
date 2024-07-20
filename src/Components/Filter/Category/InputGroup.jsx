// eslint-disable-next-line react/prop-types
const InputGroup = ({total, name, setID}) => {

   
    return (
        <div>
            <div className="input-group mb-3">
                <select 
                className="form-select" 
                id={name}
                onChange={e=>setID(e.target.value)}>

                  
                    {[...Array(total).keys()].map(x => {
                        return(
                            <option key={x} value={x+1}>{name} {x+1}</option>
                        )
                    })}
                
                 
                </select>
            </div>

        </div>
    )
}

export default InputGroup
