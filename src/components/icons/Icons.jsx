import {useState} from 'react'
import "./icons.css"

function Icons() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }


  return (
    < >
      <div className='projectsIconsDiv'>
        <button 
        className="projectsIcons"
        onClick={openModal}
        >
        </button>
        <p className='projectIconText'>Projects</p>
      </div>
        {showModal && (
          <div>Project</div>
        )}
      <div className='resumeIconsDiv'>
        <button 
        className="resumeIcons"
        onClick={openModal}
        >
        </button>
        <p className='resumeIconText'>Resume</p>
      </div>
      {showModal && (
        <div>Resume</div>
      )}
      <div className='gitHubIconsDiv'>
        <button className="gitHubIcons">
        </button>
        <p className='gitHubIconText'>GitHub</p>
      </div>
      <div className='linkedInIconsDiv'>
        <button className='linkedInIcons'>
        </button>
        <p className='linkedInIconText'>LinkedIn</p>
      </div>
    </>
  )
}

export default Icons