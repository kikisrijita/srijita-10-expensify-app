import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
    <h1>INFO</h1>
    <p> This is the info: {props.info}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuthenticated ? ( <WrappedComponent {...props}/>) :
        ( <p>authentication is required</p> )}
        
        </div>
    )
}



const AuthInfo = requireAuthentication(Info)


ReactDOM.render(<AuthInfo isAuthenticated={false} info= "there are the details" /> , document.getElementById('app'))