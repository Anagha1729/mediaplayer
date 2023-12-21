import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { addCategory, deleteCategory, getCategories, getSpecificVideo, updatecategory } from '../Services/allApis';
import { toast } from 'react-toastify';
  import VideoCard from './VideoCard'


function Category() {

  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [CategoryDetails, setCategoryDetails] = useState({
    id: '', categoryName: '', allVideos: []
  })


    const handleCategoryList = async () => {
    const res = await getCategories()
    setCategories(res.data) }
  
    const handleCategory = (e) => {
    const { name, value } = e.target
    setCategoryDetails({ ...CategoryDetails, [name]: value })}

   const handleRequest = async () => {
    const res = await addCategory(CategoryDetails)
    console.log(res)

    if (res.status >= 200 && res.status < 300) {
      setShow(false)
      handleCategoryList()
      toast.success("Category added!!")
    }
    else 
    {
      toast.error("Failed!!")
    }
  }

 const handleCategoryDelete=async(id)=>{
  const res=await deleteCategory(id)
  //cosole.log(res)
  if(res.status>=200 && res.status<300){
    toast.success("Category Removed!!")
    handleCategoryList()
  }
  else
  {
    toast.error("Category not removed!")
  }
 }

  console.log(CategoryDetails)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {handleCategoryList() }, [])

  const dragOver=(e)=>{
    e.preventDefault()
    console.log("Dragging over category Board!!")
  }
  const onDropHandle=async(e,id)=>{
    console.log("Drop Target Category id:",id)
    let videoid=e.dataTransfer.getData("videoid")
    console.log("video ID,videoid");
    const video=await getSpecificVideo(videoid)
    console.log(video.data)
  

  let selectedCategory=categories?.find(item=>item?.id===id)
  //console.log(selectedCategory)
  selectedCategory.allVideos.push(video.data)
  console.log(selectedCategory)
  const res=await updatecategory(id,selectedCategory)
  console.log(res)
  if(res.status>=200 && res.status<300){
    toast.success("Video added to Category!")
    handleCategoryList()
  }
  }
  return (
    <>
      <div className='d-grid'>
        <Button onClick={handleShow} className='btn btn-secondary'> Add Category</Button>
      </div>
       {
        categories.map(item=>(
          <div className='bg-info m-3 p-3 boder border-danger shadow rounded' droppable onDragOver={e=>dragOver(e)} onDrop={(e)=>onDropHandle(e,item?.id)}>
          <div>
            <span>{item?.categoryName}</span>
            <span style={{float:'right'}}className='btn' onClick={()=>handleCategoryDelete(item?.id)}><i class='fa-solid fa-trash' style={{color:'#000000'}}></i></span>
            </div>
           <div>
           {item?.allVideos.map(video=>(
            <VideoCard video={video} isCategory={true}/>
           ))}
         </div>
       
</div>
        ))}
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
         <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
         </Modal.Header>
        
        <Modal.Body>
          <FloatingLabel controlId="floatingId" label="ID" className="mb-3">
            <Form.Control type="text" placeholder="Enter Unique ID" name='id' onChange={(e) => handleCategory(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCategory" label="Category Name">
          <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e) => handleCategory(e)} />
          </FloatingLabel>
         </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRequest}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Category