import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './users.css'

function Users() {
    const [data, setData] = useState([]);

    function getData(){
        axios
        .get('https://633935c1937ea77bfdc7c2d3.mockapi.io/create-ems')
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        });

    }

    useEffect(() => {
      getData();
    }, []);

    function setToLocal(id,name,email,password){
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);

    } 

    function deleteHandler(id){
        axios.delete(`https://633935c1937ea77bfdc7c2d3.mockapi.io/create-ems/${id}`
        )
        .then(()=>{
        getData()
        })
    }
    

    return (
        <div className='userlist'>
            <div className='userlistHeader'>
                <h2>User List</h2>
                <Link to="/create">
                <button class="btn btn-primary" type="submit">Create</button>
                </Link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((row)=>{
                    return(
                        <>
                        <tbody>
                            <tr>
                            <th scope="row">{row.id}</th>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td><Link to="/update"><i class="bi bi-pencil-fill" onClick={()=>setToLocal(row.id,row.name,row.email,row.password)}></i></Link></td>
                            <td><i class="bi bi-trash3" onClick={()=> deleteHandler(row.id)}></i></td>
                            </tr>
                        </tbody>
                        </>
                    )
                })}
                
            </table>   
        </div>
    )
}

export default Users
