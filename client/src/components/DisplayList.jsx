import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
const DisplayList = (props) => {
const {author, updatedList} = props
  return (
    <table>
        <thead>
            <tr>
                <th>Authors</th>
            </tr>
        </thead>
        <tbody>
        {props.author ?
        props.author.map((author,i)=>{
            return(
               <tr key={i}>
                   <td>{author.name}</td>
                   <td><Link to={`/edit/${author._id}`}>Edit</Link></td>
                   <td><DeleteButton authorId={author._id} list={props.author} updatedList={updatedList}/></td>
               </tr> 
            )
        })
        :<></>
        }
        </tbody>
    </table>
  )
}

export default DisplayList