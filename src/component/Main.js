import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './Hornedbeast.json';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            gallery: this.props.data
        }
    }

    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">

                    {
                        this.props.data.map(item => {
                            return (
                                <HornedBeast
                                    title={item.title}
                                    src={item.image_url}
                                    description={item.description}
                                    showModal={this.props.showModal}
                                    updateSelectedbeast={this.props.updateSelectedbeast}
                                />
                            )
                        })
                    }
                </Row>
            </>
        )
    }
}
export default Main;