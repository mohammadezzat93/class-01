import React from 'react';
import HornedBeast from './HornedBeast';
import data from './Hornedbeast.json';
import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {

    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">

                    {
                        data.map(item => {
                            return (
                                <HornedBeast
                                    title={item.title}
                                    imgURL={item.image_url}
                                    description={item.description}
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