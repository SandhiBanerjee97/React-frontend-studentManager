import { useState,useEffect } from "react"
import { toast } from 'react-toastify';
import Student from "./Student"
import base_url from "./../api/bootapi";
import axios from "axios";
const AllStudents=()=>{

    const[students,setStudents]=useState([])
    
    useEffect(()=>{
        document.title="All Students";
        getAllStudentsFromServer();
    },[])
    
    //function to get all studnts from server
    const getAllStudentsFromServer=()=>{
        axios.get(`${base_url}/students`).then(
            (response)=>{
                toast.success("All Student data loaded");
                setStudents(response.data)
            },
            (error)=>{
                console.log(error)
                toast.error("server error")
            }
        )
    }

    const updateStudentsStateList=(id)=>{         // function to remove data from state 
        setStudents(students.filter((s)=>s.id !==id))
    }           

    return(
        <div>
            <h1 className="text-center">All Students</h1>
            <p className="text-center">List of Students are as Follows</p>
            {
                students.length>0? students.map((item)=>(
                    <Student key={item.id} student={item} updateState={updateStudentsStateList}/>
                )) :"Loading...Please be patient , Heroku takes a while to Load the Application on server😅"
            }
        </div>
    )
}
export default AllStudents;
