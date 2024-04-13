import React from "react";
import "./Postdetail.css";
import { useLocation, useNavigate } from "react-router-dom";



import AppsubmitButton from "../../component/navbar/appsubmitbutton.js/AppsubmitButton";
import useFirestore from "../../hookss/useFirestore";
import useAuthContext from "../../hookss/useAuthContext";

const Postdetail = () => {
  const location = useLocation();
   
  const { state:post } = location;
 
  const navigate = useNavigate()
 const{deleteDocument} = useFirestore('posts')
 const {user} = useAuthContext()


  const handleEdit = ()=>{
       navigate(`/edit/${post.id}`,{state:post})
  }
  const handleDelete = ()=>{
    deleteDocument(post.id)
    navigate('/')
}

   
  return (
    <div className="container outer">
    <div className="jumbotron">
      <h1 className="display-4">{post.title}</h1>
      <p className="lead">{post.body}</p>
      {/*{
          data.length !== 0 && (<div className="alert alert-success" role="alert">
        Post Deleted successfully
        </div>)
      }*/}
      {(user.uid === post.userId) ? <>
      <div className="float-end">
        <AppsubmitButton onClick={handleDelete} title="Delete"/>
         <AppsubmitButton onClick={handleEdit} title="Edit"/>
      
      </div>
      </> : <></>}
    </div>
    </div>
  );
};

export default Postdetail;
