import React from 'react'

const Base = ({
    title="Title",
    description="Description",
    children
}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <h4>{description}</h4>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default Base