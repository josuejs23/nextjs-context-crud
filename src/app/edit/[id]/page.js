import React from 'react'

const page = ({params}) => {
    const {id } = params;
    console.log(params)
    return (
    <div>editando - {id}</div>
  )
}

export default page