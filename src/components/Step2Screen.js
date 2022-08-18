import React from 'react'
import Base from './Base'

const Step2Screen = () => {
  return (
    <Base 
        title="Let's setup a home for all your work"
        description='You can always another workspace later'
    >
        <form>
            <label>Workspace Name</label>
            <input
             type="text"
             placeholder='Eden'
            />
            <label>Workplace URL <span>(optional)</span></label>
            <span>www.eden.com/</span>
            <input
             type="text"
             placeholder='Example'
            />
        </form>
    </Base>
  )
}

export default Step2Screen