import { Link } from "react-router-dom";


const Friend = (props) => {
    const {id,name,userName,email,address,website} = props.user
    
   
    const friendstyle = {
       border:'3px solid blue',
       borderRadius:'15px',
       padding:'8px'
    }
    const url = `/friend/${id}`
    return (
        <div style={friendstyle}>
            <h2>I am : {name}</h2>
            <h2>Id : {id}</h2>
            <h3>My user name : {userName}</h3>
            <h4>Email : {email}</h4>
            <h5>Address : {address?.city}</h5>
            <h6>Visit me : {website}</h6>
            <Link to={url}>Visit Me</Link>

        </div>
    );
};

export default Friend;