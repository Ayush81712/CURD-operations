import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Read = () => {
    const [data, setData] = useState([]);

    function getData(){
        axios
        .get("https://6544cc8e5a0b4b04436cffcc.mockapi.io/curd/curd-youtube")
        .then((res)=> {
            console.log(res.data)
            setData(res.data);

        });
    }

    const setLocalStorage = (id, name, email)=> {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email",email)


    }

    function handledelete(id) {
        axios.delete(`https://6544cc8e5a0b4b04436cffcc.mockapi.io/curd/curd-youtube/${id}`)
        .then(() =>{
            getData();
        })
    }

    useEffect(() =>{
        getData();

    },[])
    
  return (
    <>
    <div className='d-flex justify-content-between m-2' >
    <h2 style={{ fontSize: '35px', color: 'black' , margin: '10px'}}>  Read</h2>
    <Link to="/">
    <button className='btn btn-primary'>Create Data</button>
    </Link>
    </div>


    <table className="table">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>

            </tr>
        </thead>
        {
            data.map((eachdata) =>{
                return (
                    <>
                    <tbody>
                        <tr>
                            <th scope="row">{eachdata.id} </th>
                            <td>{eachdata.name}</td>
                            <td>{eachdata.email}</td>
                            <td>
                                <Link to="/update"><button className='btn-success' onClick={()=> setLocalStorage(eachdata.id, eachdata.name, eachdata.email)}>Edit{" "}</button></Link>
                            </td>
                            
                            <td>
                            <button className='btn-danger' onClick={() =>handledelete(eachdata.id)}
                            >Delete</button>
                            </td>

                        </tr>
            
            
                    </tbody>
                    </>
                )
            })
        }
    </table>
    </>
  )
};

export default Read;