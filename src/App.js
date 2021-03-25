import './App.css';
import {ToastContainer} from "react-toastify";
import { Container, Row, Col } from 'reactstrap';
import Header from "./components/Header"
import Menu from './components/Menu';
import Home from './components/Home';
import {BrowserRouter as Router,Route} from "react-router-dom";
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import UpdateStudent from './components/UpdateStudent';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  return (
    <div>
     <Router>
     <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menu/>
          </Col>
          <Col md={8}>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/add-student" >
            <AddStudent/>
          </Route>
          
          <Route exact path="/update-student/:id" >    {/* dynamic routing */}
            <UpdateStudent/>
          </Route>

          <Route exact path="/view-student">
            <AllStudents/>
          </Route>

          <Route exact path="/about" >
             <About/>
          </Route>

          <Route exact path="/contact" >
             <Contact/>
          </Route>

          </Col>
        </Row>
      </Container>
     </Router>
    </div>
  );
}

export default App;
