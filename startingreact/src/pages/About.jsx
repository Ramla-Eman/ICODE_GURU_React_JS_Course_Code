import React from 'react'

const About = (details) => {
  return (
    <div>
      <h1>My Name is {details.name}</h1>
      <h1>My Age is {details.age}</h1>
    </div>
  )
}

export default About