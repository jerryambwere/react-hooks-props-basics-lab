import React from 'react'

const Links = ({user}) => {
  return (
    <div id='links'>
        <h3>Links</h3>
        <a href={user.links.github}>{user.links.github}</a>
        <div>
        <a href={user.links.linkedin}>{user.links.linkedin}</a>
        </div>
    </div>
  )
}

export default Links