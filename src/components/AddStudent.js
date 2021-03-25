import { useEffect, useState } from "react";
import {Button, Container, Form, FormGroup,Input} from "reactstrap";
import axios from 'axios';
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";
const AddStudent=()=>{

    useEffect(()=>{
        document.title="Add Student";
    },[])

    
    const [name,setName]=useState('');
    const [stream,setStream]=useState('');
    const [email,setEmail]=useState('');
    const history= useHistory();

    //function to call server to post data
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/students`,data).then(
         (response)=>{
            console.log(response);
            toast.success("student added");
            history.push('/view-student');
         },
         (error)=>{
            console.log(error);
            toast.error(error.message);
         }   
        ) 
    }


    //form handler
    const handleForm=(e)=>{
        const student={name,stream,email}
        console.log(student)
        postDataToServer(student);
        e.preventDefault();             //prevent page refresh on submit

    }

    return(
        <div>
            <h1 className="text-center my-3">Fill Student Detils</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor ="studentName">Student name</label>
                    <Input 
                    type="text" 
                    placeholder="enter name here" 
                    name="studentName" 
                    id="studentname"
                    maxLength="50"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="studentEmail">Student Email</label>
                    <Input 
                    type="text" 
                    placeholder="enter email here" 
                    name="studentEmail" 
                    id="studentEmail" 
                    maxLength="50"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}></Input>
                </FormGroup>
                
                <FormGroup>
                    <label htmlFor="studentDepartment">Student Department</label>
                    <Input 
                    type="textarea" 
                    placeholder="enter stream here" 
                    name="studentDepartment" 
                    id="studentDepartment" 
                    maxLength="50"
                    style={{height:'200'}}
                    onChange={(e)=>{
                        setStream(e.target.value);
                    }}></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success" className="mr-2">Add Student</Button>
                    <Button color="warning" type="reset">Clear</Button>
                </Container>
            </Form>
        </div>
    );
};
export default AddStudent;