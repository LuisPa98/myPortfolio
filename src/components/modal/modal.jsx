import React, {useState, useEffect} from 'react'
import "./modal.css"

function Modal() {
  const [showModal, setShowModal] = useState(false)

  const content = "This is a model"
  const button1 = "Open";
  const button2 = "Close";

  const openModal = () => {
    setShowModal(true)
  }
  
  const closeModal = () => {
    setShowModal(false)
  }
  
    useEffect(() => {
      openModal() 
    },[])
  
  
  return (
    <div className='modalContainer'>
      <button
      onClick={openModal}
      className='noShow icon1Modal'>
        {button1}
      </button>
      {showModal && (
        <div className="modalInfoContainer">
          <div className="modalFrame">
            <p>{content}</p>
            <button
              onClick={closeModal}
              className='closeModalBtn'>
                {button2}
              </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal