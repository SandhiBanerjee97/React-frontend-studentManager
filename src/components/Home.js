import { useEffect } from "react";
import { Link } from "react-router-dom";
import {Jumbotron,Container} from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Student manager App";
    },[])
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