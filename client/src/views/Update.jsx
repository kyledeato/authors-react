import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import Form from '../components/Form';
const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                setAuthor(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    const handleUpdate = author => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res=>navigate('/'))
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
        <h1>Update Author</h1>
        {author &&
        <Form initialName={author.name} onSubmitProp={handleUpdate} errors={errors}/>}
    </div>
  )
}

export default Update