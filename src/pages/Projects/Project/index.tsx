import React from 'react'

const Project = (props: any) => {
  const {name, type, image, source} = props;
  return (
    <div>{name}</div>
  )
}

export default Project