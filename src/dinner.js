import React from 'react';

function Diner(props) {
    return ( <
        div className = "app" >
        <
        h1 > Today we are serving { props.dishName } < /h1> <
        h1 > Today we are also serving { props.sweetName } < /h1>

        <
        /
        div >
    );

}
export default Diner;