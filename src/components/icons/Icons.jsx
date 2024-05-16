import {useState} from 'react'
import "./icons.css"

function Icons() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal(true)
  }

  const closeResumeModal = () => {
    setShowResumeModal(false)
  }

  const openProjectModal = () => {
    setShowProjectModal(true)
  }

  const closeProjectModal = () => {
    setShowProjectModal(false)
  }

  return (
    < >
      <div className='projectsIconsDiv'>
        <button 
        className="projectsIcons"
        onClick={openProjectModal}
        >
        </button>
        <p className='projectIconText iconText'>Projects</p>
      </div>
        {showProjectModal && (
          <div className='projectModalWindow'>
            <div>Project</div>
            <button
            className='closeProjectModal'
            onClick={closeProjectModal}
            >

            </button>
          </div>
        )}
      <div className='resumeIconsDiv'>
        <button 
        className="resumeIcons"
        onClick={openResumeModal}
        >
        </button>
        <p className='resumeIconText iconText'>Resume</p>
      </div>
      {showResumeModal && (
        <div className='resumeModalWindow'>
          <div>Resume</div>
          <button
          className="closeResumeModal"
          onClick={closeResumeModal}>

          </button>
        </div>
      )}
      <div className='gitHubIconsDiv'>
        <button className="gitHubIcons">
        </button>
        <p className='gitHubIconText iconText'>GitHub</p>
      </div>
      <div className='linkedInIconsDiv'>
        <button className='linkedInIcons'>
        </button>
        <p className='linkedInIconText iconText'>LinkedIn</p>
      </div>
    </>
  )
}

export default Icons