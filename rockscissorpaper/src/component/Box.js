import React from 'react'

const Box = (props) => {
  
  return (
    <div className={`box ${props.result}`}>
        <h2>{props.gamer}</h2>
        {props.item? <img className="img-item" src={props.item?.img} />: <p>Waiting...</p>}
        <h3>{props.item?.name}</h3>
        <h1 className={`${props.result}-result`}>{props.result}</h1>
    </div>
  )
}

export default Box