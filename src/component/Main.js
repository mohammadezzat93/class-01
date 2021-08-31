import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import SelectedBeast from './component/SelectedBeast';


class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            rates : 0
        }
    }
    icrement = () => {
        this.setState({
            number: this.state.number + 1
            
        });

        this.props.showModel();

    }

    rate = () => {
        // this.setState({
        //     rates: this.state.rates + 1
        // });

        // this.props.sendMethodTotalToMain()

    }

    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body className="description">
                            
                            <Card.Img variant="top" src={this.props.imgUrl} onClick={this.icrement}
                                width="200" height="200" />
                                <Card.Title className="title">{this.props.title}</Card.Title>
                            <Card.Text className="description">
                                {this.props.description}
                            </Card.Text>
                            <Card.Text className="description">
                                💖 :{this.state.number}
                            </Card.Text>
                            {/* <Card.Text className="description">
                                💖 :{this.state.rates}
                            </Card.Text> */}
                            <Button variant="primary">Go somewhere</Button>
                            {/* <Button variant="primary" onClick = {this.rate} >Go somewhere</Button> */}

                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}
export default Main;