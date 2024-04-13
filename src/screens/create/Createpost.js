import React from 'react'
import './Createpost.css'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import AppsubmitButton from '../../component/navbar/appsubmitbutton.js/AppsubmitButton'
import useFirestore from '../../hookss/useFirestore'
import useAuthContext from '../../hookss/useAuthContext'

const Createpost = () => {

  const navigate = useNavigate()
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [validationError, setvalidationError]= useState('')
  const {user} = useAuthContext()

  const {addDocument,error} = useFirestore('posts')

  const handleSubmit = async(e)=>{
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
   
    
   addDocument({title,body:content,userId:user.uid})
    navigate('/')
  }
 
  
  return (
    <div className='outercontainer'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label><h6>Title</h6></label>
          <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label><h4>Content</h4></label>
         <textarea className='form-control' value={content} onChange={(e)=>setContent(e.target.value)}/>
        </div>
        {
          validationError && <div className="alert alert-danger" role="alert">
          {validationError}
        </div>
        
        }
       {/* {
          data.length !== 0 && <div className="alert alert-success" role="alert">
        Post created successfully
        </div>
        }  */ } 
       
        {
          error && <div className="alert alert-danger" role="alert">
          {error}
          </div>
        }
        <div className="float-end">
      
         <AppsubmitButton title="Create"/>
      </div>
      </form>
    </div>
  )
}

export default Createpost