import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='bg-success' style={{width:'100%',height:'400px'}}>
        <Row className='p-5' style={{color:'#1f512b'}}>
          <Col md='4'>
            <h4><i className="fa-solid fa-cloud-arrow-up me-3" style={{color:'#1f512b'}}></i>{''}Media Player</h4>
            <p style={{textAlign:'justify'}}>
            A media player is a program or hardware device capable of playing a media file or disc. For example, many media players today can play audio files, such as MP3 song and video files such as a short video clip or movie. Below are some of our favorite media players. The image is a visual example of the Microsoft Windows Media player.
            </p>
          </Col>
         
          <Col md='4' className='d-flex justify-content-center'>
          <div  className='d-flex flex-column' >
            <h4>Link</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'#1f512b'}}>Landing Page</Link>
            <Link to={'/home'}style={{textDecoration:'none',color:'#1f512b'}}>Home</Link>
            <Link to={'/watch-history'} style={{textDecoration:'none',color:'#1f512b'}}>Watch History</Link>
            </div>
          </Col>
        
          <Col md='4' className='d-flex justify-content-center' >
            <div className='d-flex flex-column'>
            <h4>Guids</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'#1f512b'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'#1f512b'}}>React-bootstrap</Link>
            <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'#1f512b'}}>Fontawsome</Link>
            </div>
          </Col>
        </Row>
        <p className='text-center mt-3' style={{color:'#1f512b'}}>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
      </div>
    </div>
  )
}

export default Footer