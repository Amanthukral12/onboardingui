import React from 'react'
import Base from './Base'
const Step1Screen = () => {
  return (
    <Base 
        title='Welcome! First things first'
        description='You can always change them later'
    >
        <form>
            <label>Full Name</label>
            <input
             type="text"
             placeholder='Steve Jobs'
            />
            <label>Display Name</label>
            <input
             type="text"
             placeholder='Steve'
            />
        </form>
    </Base>
  )
}

export default Step1Screen