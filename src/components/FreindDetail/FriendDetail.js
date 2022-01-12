import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


const FriendDetail = () => {
const {friendId} = useParams()   
const [userFriend,setUserFriend] = useState({})
const history = useHistory()
useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> setUserFriend(data))
},[])

const handleFriendDetail = ()=>{
     history.push(`/friends/`)
}

    return (
        <div>
            <h1>Friend Detail Component:</h1>
            <h2>I Am : {userFriend.name} : {userFriend.id}</h2>
            <h5>My UserName : {userFriend.username}</h5>
            <h4>Email : {userFriend.email}</h4>
            <h5>Address : {userFriend.address?.city}</h5>
            <h3>Contact : {userFriend.phone}</h3>
            <h4>Company : {userFriend.company?.bs}</h4>
            <h5>Website : {userFriend.website}</h5>
            <button onClick={()=>handleFriendDetail()}>Go To Home</button>



        </div>
    );
};

export default FriendDetail;