import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

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