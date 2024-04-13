import React from 'react'
import './Editpost.css'
import { useLocation,useNavigate } from 'react-router-dom'

import { useEffect,useState } from 'react'
import AppsubmitButton from '../../component/navbar/appsubmitbutton.js/AppsubmitButton'
import useFirestore from '../../hookss/useFirestore'

const Editpost = () => {

  
  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [validationError, setvalidationError]= useState('')
  const [modifiedField, setmodifiedField] = useState({})

  const location = useLocation()

  const {state:post} = location
 
const {updateDocument,error} = useFirestore('posts')
  

  const handleSubmit = (e)=>{
    e.preventDefault()
   
    if(!title){
      setvalidationError('Title should not be empty')
       return
    }
    if(!content){
      setvalidationError('Content should not be empty')
      return
    }
    setvalidationError('')
    console.log(modifiedField)
    updateDocument(post.id , modifiedField)
    navigate('/')
  }
  useEffect(()=>{
    setTitle(post.title)
    setContent(post.body)
    
  },[post.title,post.body])


  const onTitleChange =(e) =>{
    setTitle(e.target.value)
    setmodifiedField({...modifiedField,title:e.target.value})
  }
  const onContentChange =(e) =>{
    setContent(e.target.value)
    setmodifiedField({...modifiedField, body:e.target.value})
  }

  return (
    <div className='outercontainer'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label><h6>Title</h6></label>
          <input type="text" className='form-control' value={title} onChange={onTitleChange}/>
        </div>
        <div className='form-group'>
          <label><h4>Content</h4></label>
         <textarea rows="5" className='form-control' value={content} onChange={onContentChange}/>
        </div>
        {
          validationError && <div className="alert alert-danger" role="alert">
          {validationError}
        </div>
        
        }
        {/*
          data.length !== 0 && <div className="alert alert-success" role="alert">
        Post Edited successfully
        </div>
      */}
      {
        error && <div className="alert alert-danger" role="alert">
        {error}
        </div>
      }
        
        <div className="float-end">
          <AppsubmitButton title="Edit"/> 
      </div>
      </form>
    </div>
  )
}

export default Editpost