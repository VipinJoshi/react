import react, { Component} from 'react';

import './Helloworld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
    render() {
      return (
        <div className="HelloWorldList">
          <HelloWorld name="Vipin"/>
          <HelloWorld name="Yamini"/>
        </div>
      );
    }
  }
  export default HelloWorldList;