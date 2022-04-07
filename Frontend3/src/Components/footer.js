import { Card, Row } from 'react-bootstrap';
//import '../Css/navbar.css';
import '../Css/footer.css';

const Footer = () =>{
    return(
        <div>
            <Card bg="primary" className="footer-styling">
                        <Card.Body>Copyright © 2021 I-MedCare. All Rights Reserved</Card.Body>
            </Card>
        </div>

    );
}
export default Footer