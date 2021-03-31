import axios from "axios";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import base_url from "./../api/bootapi";
import {Jumbotron,Container} from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        getHomeMessage();
        document.title="Home || Student manager App";
    },[])
    const getHomeMessage=()=>{
        axios.get(`${base_url}/home`).then(
            (response)=>{
                toast.success(response.data);
            },
            (error)=>{
                console.log(error)
                toast.error("server error")
            }
        )
    }
    return(
        <div>
            <Jumbotron className="text-center">
                <h1>Welcome To the Application</h1>
                <p>This Application is for Learning Purposes </p>
                <Container>
                <Link to="/add-student" className="btn btn-outline-primary" color="primary" outline>Start Here</Link>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default Home;