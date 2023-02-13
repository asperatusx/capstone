import axios from 'axios';
import React, { useRef } from 'react'
import './Customize.scss'

const BACKEND_ENDPOINT = "/customize";


const Customize = () => {
  const form = useRef();
 

  function handleSubmit(e) {
    e.preventDefault();
    const newSkills = {
      skills: form.current.skill.value
    }
    axios.post(`${process.env.REACT_APP_URL}${BACKEND_ENDPOINT}`, newSkills)
  }

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name='skill' placeholder='Enter a skill' required/>
        <button type='submit' className='btn btn-primary'>Add Skill</button>
      </form>
    </>
  )
}

export default Customize