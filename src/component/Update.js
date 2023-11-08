import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();

    useEffect (() =>{
      setId(localStorage.getItem("id"))
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))

    },[])

    const handleUpdate = (e) =>{
      e.preventDefault()
      axios.put(`https://6544cc8e5a0b4b04436cffcc.mockapi.io/curd/curd-youtube/${id}`,
      {name: name , email: email,
      })
      .then (()=>{
        navigate("/read");
      })
    }
  return (
    <>
    <h2 style={{ fontSize: '35px', color: 'black' , margin: '20px'}}>  Update</h2>
     <form  style={{ fontSize: '20px', color: 'black' , margin: '20px'}}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" 
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
        </div>
        <div className="mb-3">
            <label className="form-label" >Email address</label>
            <input type="email" className="form-control"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
           
        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>
            Update
        </button>

      
        <Link to="/read">
        <button className='btn btn-secondary mx-2'>Back</button>
        </Link>

      </form>
    </>
  )
}

export default Update;