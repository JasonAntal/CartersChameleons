import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

class Login extends React.Component{
    render(){
      return(
        <div className = "App-header subpage">
              <h2 className ="section-heading">We're working on adding account features to our site. Thank you for your patience! </h2>
              <br />
        </div>
      )
    }
  }
  ReactDOM.render(<Login/>, document.getElementById('root'))
  
  export default Login