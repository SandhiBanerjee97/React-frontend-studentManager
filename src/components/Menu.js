import { Link } from "react-router-dom";
import {ListGroup} from "reactstrap";
const Menu=()=>{
    return(
        <ListGroup>
        <Link className="list-group-item list-group-item-action" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" to="/add-student" action>Add Student</Link>
        <Link className="list-group-item list-group-item-action" to="/view-student" action>View Students</Link>
        <Link className="list-group-item list-group-item-action" to="/about" action>About</Link>
        <Link className="list-group-item list-group-item-action" to="/contact" action>Contact</Link>
      </ListGroup>
    );
}
export default Menu;