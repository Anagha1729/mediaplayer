import React, { useEffect, useState } from 'react'
import VideoCard from '../Component/VideoCard'
import{getVideos} from '../Services/allApis'
import { Row,Col } from 'react-bootstrap'

function View({resState}) {
  const[allVideos,setAllVdeos]=useState([])
  const[delResponse,setDelResponse]=useState(false)
  const delResUpdate=()=>{
    setDelResponse(true)
  }
  const getVideo=async()=>{
    let res=await getVideos()
    setAllVdeos(res.data)
    setDelResponse(false)
    //console.log(res.data)
  }

  useEffect(()=>{
    getVideo()
  },[resState,delResponse])
  return (
    <div className='p-3 border shadow rounded' style={{backgroundColor:'rgb(129,185,277)'}}>
     <Row>
      {
        allVideos.map(item=>(
          <Col sm={12}md={6}>
            <VideoCard video={item} delResUpdate={delResUpdate}/>
          </Col>
        ))
      }
     </Row>
    
    </div>
  )
}

export default View