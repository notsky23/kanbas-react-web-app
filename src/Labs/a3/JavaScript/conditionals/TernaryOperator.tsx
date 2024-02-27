function TernaryOperator() {
    let loggedIn = true;
    
    return(
        <div>
           <h3>Logged In</h3>
           { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
        </div>
     )
    
    
 }
 export default TernaryOperator