import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    icrement = () => {
        this.setState({
            number: this.state.number + 1

        });
    }
    render() {
        return (
            <>
                    <Col>
                        <Card style={{ width: '25rem' }}>

                            <Card.Img variant="top" src={this.props.imgURL} onClick={this.icrement}
                                width="200" height="200" />

                            <Card.Body className="description">

                                <Card.Title className="title">{this.props.title}</Card.Title>

                                <Card.Text className="description">
                                    💖 :{this.state.number}
                                </Card.Text>

                                <Card.Text className="description">
                                    {this.props.description}
                                </Card.Text>
                                
                                <Button variant="primary">Go somewhere</Button>
                                {/* <Button variant="primary" onClick = {this.rate} >Go somewhere</Button> */}

                            </Card.Body>
                        </Card>
                    </Col>
            </>
        )
    }
}
export default HornedBeast;
