import React, {Component} from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props){
      super(props);
      this.state={greeting : 'Good Morning'};
      this.ChangeGreeting = this.ChangeGreeting.bind(this);
    }
    render() {
      return (
        <div className="HelloWorld">{this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.ChangeGreeting}>Change Greeting</button>
        </div>
      );
    }

    //if I want to change the state in a method we need to bind in 
    ChangeGreeting(){
    
            this.setState({greeting: 'Good Day dear'} )
            
    }
  }


export default HelloWorld;