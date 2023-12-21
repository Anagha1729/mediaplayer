import React from 'react'
import{Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand>
          <Link to={'/'}style={{textDecoration:'none'}}>
        
          <i className="fa-solid fa-cloud-arrow-up  me-3" style={{color: "#64bc85"}}></i>
            {''}
             Media Player
             </Link>
          </Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  )
}

export default Header