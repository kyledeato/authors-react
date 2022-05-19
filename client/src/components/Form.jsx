import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Form = (props) => {
    const {initialName, onSubmitProp, errors} = props
    const [name, setName] = useState(initialName);
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({name})
        
    }
  return (
    <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <div className="form-group">
            <label htmlFor='name' >Name:</label>
            <input type="text" id='name' value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <Link to={"/"}><button type="submit" className="btn btn-success">Cancel</button></Link>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form