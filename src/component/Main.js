import React from 'react';


let Main =  props => {
        return (
            <>
            
                <br></br><br></br><br></br>
                <div> {props.title} </div>
                <h2> {props.image} </h2>
                <p> {props.discription} </p>
                
                
            </>
        )
}

export default Main;