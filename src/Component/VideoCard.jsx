import React,{useState} from 'react'
import { Card,Modal,} from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addHistory, deletevideo } from '../Services/allApis';
import { v4 as uuidv4 } from 'uuid';


function VideoCard({video,delResUpdate,isCategory}) {

  const [show,setShow]=useState (false)

  const handleClose = () => setShow(false);
  const handleShow =async()=>{
    setShow(true);
    let date=new Date()
    console.log(date)
    let id=uuidv4()
    const {caption,url}=video
    //console.log(id,caption,url,date)
    let body={id,caption,url,date}
    const res=await addHistory(body)
    console.log(res)
  }

  const removeVideo=async(id)=>{
    //let id=e.target
    console.log(id)
    let res=await deletevideo(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success(" Video deleted successfully")
      delResUpdate()
    }
    else
    {
      toast.error("Deletion failed!!")
    }
  }
  
  const ondrag=(e,id)=>{
   // e.preventDefault()
    console.log("Target Video ID",id)
    e.dataTransfer.setData("videoid",id)
  }
  return (
    <div>
      <Card style={{ width: '18rem' }} className='border shadow mb-4'>
      <Card.Img onClick={handleShow} draggable onDragStart={(e)=>ondrag(e,video?.id)} style={{height:'200px'}} variant="top"  src={video?.thumbnail} alt='img'  />
      <Card.Body>
        {
          isCategory?"":
        
        <Card.Title className='text-center'>{video?.caption}<span style={{float:'right'}} className='btn'onClick={()=>removeVideo(video?.id)}><i class="fa-solid fa-trash"></i></span></Card.Title>
}
</Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${video?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
           </Modal.Body>
        
      </Modal>
      </div>
  )
}

export default VideoCard