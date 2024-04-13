import  { useState } from 'react'
import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const useFirestore = (fbcollection) => {

    const [document,setDocument] = useState(null)
    const [error,setError] = useState(null)
    
   
    const collectionRef = collection(db,fbcollection)

    const addDocument = async(document)=> {
          
           try{
                const doc = await addDoc(collectionRef,{...document,createdAt:serverTimestamp()})
                setDocument(doc)
           } catch(err){
            setError(err.message)
           }
    }

    const deleteDocument = async (id) => {

        const documentRef = doc(db,fbcollection,id)
        try{
            await deleteDoc(documentRef)
        } catch(err){
            setError(err.message)
        }

    }

    const updateDocument = async (id,document)=>{
        const documentRef = doc(db,fbcollection,id)

        try{
            await updateDoc( documentRef,{...document,createdAt:serverTimestamp()})
        } catch (err){
            setError(err.message)
        }
    } 



    return{addDocument,document,error,deleteDocument,updateDocument}
}

export default useFirestore