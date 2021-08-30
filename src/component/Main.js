import React from 'react';

class Main extends React.Component {
    render(){
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} width="400" height="400" />
                <p>{this.props.disecription}</p>
            </>
        )
}
}
export default Main;