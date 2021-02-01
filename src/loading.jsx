import React from 'react'

const Loading = () => {
  return (
    <div className="container" style={{position:'relative'}}>
      <h1 style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>still loading...</h1>
    </div>
  )
}

export default Loading
