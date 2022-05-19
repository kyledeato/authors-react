import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import DisplayList from "../components/DisplayList";
const Main = () => {
    const [author, setAuthor] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthor(res.data);
            })
            .catch(err=>console.log("Error: ", err))
    },[])

    
    const removeFromDom = authorId => {
      setAuthor(author.filter(author=> author._id !== authorId))
    }
  return (
    <div>
        <Link to={"/new"} >Add an Author</Link>
        <DisplayList author={author} updatedList={setAuthor}/>
    </div>
  )
}

export default Main