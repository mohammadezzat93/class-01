import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    icrement = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Img variant="top" src={this.props.imgUrl} onClick={this.icrement}
                                width="200" height="200" />
                            <Card.Text>
                                {this.props.disecription}
                            </Card.Text>
                            <Card.Text>
                                💖 :{this.state.number}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}
export default Main;