import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Add from '../Component/Add'
import Category from '../Component/Category'
import View from '../Component/View'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'



function Home() {
  
  const[resState,setResState]=useState(false)
  const changeResState=()=>{
    setResState(true)
  }
  return (
    <div>
      <h2>All Videos
        <Link style={{float:'right',fontSize:'20px',color:'white',textDecoration:'none'}} to ={'/watch-history'}>Watch History</Link>
      </h2>
<Row className='mx-5 mt-5 mb-5 p-5'>
  <Col md='2'>
  <Add changeResState={changeResState}/>
  </Col>
  <Col md='6'>
  <View resState={resState}/>
  </Col>
  <Col md='4'>
  <Category changeResState={changeResState}/>
  </Col>
</Row>
<ToastContainer/>
    </div>
  )
}

export default Home