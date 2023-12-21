import React, { useEffect, useState } from 'react'
import { getHistory } from '../Services/allApis'
import { Link } from 'react-router-dom'

function History() {

  const[History,setHistory]=useState([])
 
  const handleHistoryList=async()=>{
    const res=await getHistory()
    setHistory(res.data)
    console.log(res.data)
  }
 
  useEffect(()=>{
    handleHistoryList()
  },[])
  return (
    <div className='p-5'>
       <h2>
        <Link style={{float:'right',fontSize:'20px',color:'white',textDecoration:'none'}} to ={'/Home'}>Back to Home</Link>
      </h2>
      <table className='table table-striped bg-dark'>
        <tr>
          <th>ID</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
        </tr>
        {
          History.map((item,index)=>(
<tr>
          <td className='p-3'name='id'>{index+1}</td>
          <td >{item?.caption}</td>
          <td>{item?.url}</td>
          <td>{item?.date}</td>
        </tr>
      
          ))
        
          }
          </table>
    </div>
  )
}

export default History