import { useEffect } from "react";
import { Row ,Col, CardTitle, CardBody, CardText, Card, CardSubtitle} from "reactstrap"

const About=()=>{
    useEffect(()=>{
        document.title="About";
    },[])
    return(
        <div>
            <Row>
                <Col className="col-md-12"> 
                <Card style={{background:'#E9ECEF',border:"none"}}>
                    <CardBody>
                     <CardTitle tag="h1" className="text-center my-3">About The Application</CardTitle>
                     <CardText className="text-center my-4">A Simple Spring Boot REST API to manage Student Data along With a React Application to Consume The Api And the Source Code is available <a href="https://github.com/SandhiBanerjee97/SpringBoot-RestAPI-StudentCRUD">here</a> </CardText>
                     <CardSubtitle  tag="h5" className="text-center my-3">Technologies Used</CardSubtitle>
                     <CardText className="text-center mt-4">Spring Boot , Spring Data JPA(with Hibernate) , React Js , Reactstrap</CardText>
                    </CardBody>
                </Card>
                </Col>
                
            </Row>
        </div>
    );
}
export default About;