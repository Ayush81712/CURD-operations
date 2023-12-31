import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*"}

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked")
        axios.post("https://6544cc8e5a0b4b04436cffcc.mockapi.io/curd/curd-youtube",
        {name: name , email: email, header,
        })

        .then(() =>{
          history('/read')

        });
        

    }
  return (
    <>
    <div className='d-flex justify-content-between m-2' >
    <h2 style={{ fontSize: '35px', color: 'black' , margin: '10px'}}>  Create</h2>
    <Link to="/read">
    <button className='btn btn-primary'>Show Data</button>
    </Link>
    </div>
     <form  style={{ fontSize: '20px', color: 'black' , margin: '20px'}}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label" >Email address</label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>   
    </>
  )
}

export default Create;
