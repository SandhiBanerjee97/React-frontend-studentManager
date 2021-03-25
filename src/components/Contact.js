import { useEffect } from "react";
import { Row ,Col, CardTitle, CardBody, Card} from "reactstrap"


const Contact=()=>{
    useEffect(()=>{
        document.title="Contact";
    },[])

    return(
        <div>
            <Row>
                <Col className="col-md-12"> 
                <Card style={{background:'#E9ECEF',border:"none"}}>
                    <CardBody>
                     <CardTitle tag="h1" className="text-center my-3">Contact Details</CardTitle>
                     <div className="mt-3" style={{fontWeight:'bold'}}>Name :<span style={{fontWeight:'normal'}}> sandhi Bandyopadhyay</span></div>
                    <div className="mt-3" style={{fontWeight:'bold'}}>Mobile :<span style={{fontWeight:'normal'}}> 8420123820</span></div>
                    <div className="mt-3" style={{fontWeight:'bold'}}>Email :<span style={{fontWeight:'normal'}}> sandhi.banerjee.97@gmail.com</span></div>
                    <div className="mt-3" style={{fontWeight:'bold'}}>github :<span style={{fontWeight:'normal'}}><a href="https://github.com/SandhiBanerjee97/"> https://github.com/SandhiBanerjee97/</a></span></div>
                    <div className="mt-3" style={{fontWeight:'bold'}}>linkedin :<span style={{fontWeight:'normal'}}><a href="https://www.linkedin.com/in/sandhi-bandyopadhyay-6a18361b7/"> https://www.linkedin.com/in/sandhi-bandyopadhyay-6a18361b7/</a></span></div>
                                    
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </div>
    );
}
export default Contact;