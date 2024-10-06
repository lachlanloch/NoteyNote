'use client'
import { Abril_Fatface } from 'next/font/google';

import Login from "./Login.js"
import Loading from "./Loading.js"
import React, {useState} from 'react'
import { db } from '@/firebase.js';
import { useAuth } from '@/context/AuthContext';
import { doc, collection, addDoc, deleteDoc } from 'firebase/firestore';

export default function Dashboard() {
  const [filterType, setFilterType] = useState("title");
  const [filter, setFilter] = useState("")
  const [title, setTitle] = useState("")
  const [text, setText] = useState("") 
  const [textError, setTextError] = useState("")
  const [titleError, setTitleError] = useState("")
  const date = new Date()
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth()+1
  const day = date.getUTCDate()
  const today = (year.toString() + month.toString() +  day.toString()) 
  const {currentUser, loading, notes, setNotes } = useAuth()

  function convertToArray(obj){
    return Object.keys(obj).map(key =>({
      key,
      ...obj[key],
    }))
  }

  async function handleDeleteData(dataId){
    if (db && currentUser && currentUser.uid && dataId) {
      const docRef = doc(db, "users", currentUser.uid, 'notes', dataId);
      const res = await deleteDoc(docRef);
      setNotes(notes.filter((data) => {
        return data.id !== dataId;
      }));
    } else {
      console.error("One of the required values is undefined:", { db, uid: currentUser?.uid, dataId });
    }
  }

  const handleSubmit = async () => {
   
    const localData = notes
    if(text===""){
      setTextError("Text can not be blank!")
    } else {
      setTextError("")
    }
    if(title===""){
      setTitleError("Title cannot be blank!")
    } else {
      setTitleError("")
    }

    if(title !=="" && text!==""){
      
    
    if(text!=="" && title!==""){
      console.log("clicky")
      const notesCollectionRef = collection(db, "users", currentUser.uid, 'notes')
      const docRef = await addDoc(notesCollectionRef, {
      title : title, 
      text : text, 
      day : day,
      month : month,
      year : year,
      }, { merge: true})
      localData.push({
        id: docRef.id, // Store the document ID from Firestore
        title: title,
        text: text,
        day: day,
        month: month,
        year: year,
      });
      setNotes(convertToArray(localData))

    }
  
}
  }
if(!currentUser){
  return  <Login/>
}
if(loading){
return <Loading/>
}
  return (
    <div className=''>
        <div className='max-w '>
          <div className='flex items-center justify-center gap-4 border rounded-3xl border-black'>
            <h1 className='text-2xl flex-1 mx-4 h'>Filter</h1>
            <select className='p-2 border rounded-3xl bg-gray-200 hover:bg-gray-300'  
                value={filterType}
                onChange={(e) =>{
                  setFilterType(e.target.value)
                }}>
                <option value="title">Title</option>
                <option value="text">Text</option>
            </select>                     
          <input className='rounded-3xl max-h-[50px] min-h-[50px] align-top focus:outline-none focus:border-none focus:ring-none  overflow-x-auto whitespace-nowrap hover:placeholder-gray-500 focus:placeholder-gray-500' value={filter} placeholder='Filter' onChange={(e)=>{
            setFilter(e.target.value)
          }}></input>
        </div>
        <div className="grid my-2 p-4 border border-black rounded-3xl">
          <h1 className='text-3xl my-2'>Add New Note</h1>
          <h1 className='text-2xl'>Title</h1>
          <textarea className='p-4 border rounded-2xl whitespace-pre-wrap text-xl my-1 focus:outline-none focus:rounded-2xl focus:border-gray-500 focus:ring-none  overflow-x-auto whitespace-nowrap hover:placeholder-gray-500 focus:placeholder-gray-500' value={title} placeholder='Add the title here ' onChange={(e)=>{
          setTitle(e.target.value)
          }}>
          </textarea>
        {setTitleError!=="" && <h1 className='text-red-700 my-1 my-3'>{titleError}</h1>}
        <h1 className='text-2xl'>Text</h1>
        <textarea className='p-4 border rounded-2xl whitespace-pre-wrap text-xl my-1 focus:outline-none focus:rounded-2xl focus:border-gray-500 focus:ring-none  overflow-x-auto whitespace-nowrap hover:placeholder-gray-500 focus:placeholder-gray-500' value={text} placeholder='Add text here ' onChange={(e)=>{
         setText(e.target.value)
        }}>
        </textarea>
        
        {setTextError!=="" && <h1 className='text-red-700 my-1'>{textError}</h1>}
        <button className='border border-fill rounded-2xl w-auto mx-auto px-4 py-2 hover:bg-green-200' onClick={handleSubmit}>Create new Note!</button>
        </div>           
        </div>
        <div className='py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
        {notes.filter((data) =>{
            return filter.toLowerCase() === ""
            ? data.text
            : data[filterType].toLowerCase().includes(filter.toLowerCase()) 
          })
        .map((data)=>{
        return(        
        <div key={data.id} > 
        <div className='border border-solid bg-yellow-100 rounded-lg border-slate-400 '>
        <div className='flex justify-between items-start border-b-2 border-black w-full min-h-[25px] '>
            <h1 className='p-1 whitespace-pre-wrap'>{data.title}</h1>
            <div className='flex space-x-2 ml-auto'>
              <i className="fa-solid fa-trash text-red-600 p-1" onClick={() =>{
                    handleDeleteData(data.id)
                  }}></i>
            </div>
          </div>
        <p className='min-h-[100px] my-2 whitespace-pre-wrap p-1'>{data.text}</p>
        </div>
        <p className='text-xs text-center'>{data.day}/{data.month}/{data.year}</p>
        </div>
        )
        })}
        </div>
            </div>
          )
        }
