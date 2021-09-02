import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form} from 'react-bootstrap'

class Formes extends React.Component {
    render() {
        return (
            <>
                <Form onChange={this.props.submitHandler}>

                    <Form.Label>filter by number of horns</Form.Label>
                    <Form.Group className="mb-3" controlId="horned">
                        
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="All">All</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                            <option value="More_Than_3">More Than 3</option>
                        </Form.Select>

                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default Formes;