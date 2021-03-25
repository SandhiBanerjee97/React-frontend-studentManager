import{Card,CardBody,CardSubtitle,Button,Container,CardText} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Student=({student,updateState})=>{            

    const handleDelete=(id)=>{
        axios.delete(`${base_url}/students/${id}`).then(
            (response)=>{
                toast.success("student Data deleted");
                updateState(id);              //using the function passed as prop to Update the sudentState in front end after deletion in backend
            },
            (error)=>{
                toast.error("couldn't delete || server error")
            }
        )
    }

    return(
        <div>
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{student.name}</CardSubtitle>
                <CardText className="mt-3">Stream : {student.stream}</CardText>
                <CardText>Email : {student.email}</CardText>
                <Container className="text-center">
                    <Button onClick={()=>{                    //handleDelete must be called inside and annonymous Function so that it is not called during initial render
                        handleDelete(student.id)
                    }} color="danger">Delete</Button>  

                    <Link to={`/update-student/${student.id}`} className="btn btn-warning ml-3">Update</Link>    {/* this link is being used for dynami routing hence we need to pass the id with the route link */}
                </Container>
            </CardBody>
        </Card>
    </div>
    );
    
};
export default Student;