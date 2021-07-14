//components
/*const User =(props) =>{
    return(
        <div>
            <h1>
                {props.name}       
            </h1>
            <h4>
                {props.description}
            </h4>
        </div>
    );
};

export default User;  //exporting   */        

//implementing state

import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            planet: "earth",
        };
        console.log("hey I am from Constructor");
    }

    /*componentDidMount(){    //it must be in between constructor and render
        this.setState({planet:"mars"});
    } */

     /*static getDerivedStateFromProps(prop,state) {
         console.log("i am from get derived state from props");
         return {planet: "jupitor"};
     }*/

     componentDidMount(){   
        this.setState({planet:"JUpitor"});
     }

     shouldComponentUpdate(nextProp,nextState) {
         console.log({
             nextProp,
             nextState,
         });
         return true;
     }

     getSnapshotBeforeUpdate(prevProp, prevState) {
         console.log({ prevProp, prevState});
         return true;
     }

     componentDidUpdate() {
         console.log(this.state);
     }

    render(){
        console.log("hey i am from rendered");
        return(
            <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
            <h4>{this.state.planet}</h4>
            </div>
        );
    }
}

export default User;
//props => properties/parameter
//a data that is beging passed from one component to another
//state->
//props.name=> js expression