import axios from 'axios'
import React from 'react'

const DeleteButton = (props) => {
    const {authorId, list, updatedList} = props;
    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res=>{
                const updateList = list.filter((author)=>author._id !== authorId);
                updatedList(updateList)
            })
    }


  return (
    <div>
        <button onClick={deleteAuthor}>
            Delete
        </button>
    </div>
  )
}

export default DeleteButton