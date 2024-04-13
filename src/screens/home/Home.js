import React   from 'react'
import './Home.css'
import Post from '../../component/navbar/postss/Post'

import useFetchCollection from '../../hookss/useFetchCollection'

 
const Home = () => {

   const {documents : posts} = useFetchCollection("posts")
  

  return (
   
    <div className='container outer'>
       {
        posts && posts.map((post)=>{
          return <Post post={post} key={post.id}/>
        })
       }
      
    </div>
     )
}

export default Home