import React from 'react'
import { useState, useEffect } from 'react'
import "./infoFooter.css"

function InfoFooter() {
  return (
        <footer className='infoFooterBar'>
          <div className='footerMenu'>
            <h3>Click Me!</h3>
          </div>
          <nav className='infoFooterMenu'>
            <li>About Me</li>
            <li>Technology Used</li>
            <li>Art By</li>
          </nav>
        </footer>

  )
}

export default InfoFooter