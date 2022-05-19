import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);

    const createAuthor = author =>{
        axios.post("http://localhost:8000/api/authors", author)
        .then(res=>{
            console.log(res);
            navigate('/')
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];

            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }
  return (
    <div>
        <Form onSubmitProp={createAuthor} initialName="" errors={errors}/>
        
    </div>
  )
}

export default Create