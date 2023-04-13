import React from 'react'
import { BsFillArrowUpRightSquareFill, BsFillArrowDownLeftSquareFill } from 'react-icons/bs'


function Quality(obj) {
  return (
    <div className="card">
      <h1 className="title">{obj.name}</h1>
      <p className="subtitle">Score out of 100</p>
      <span className="card-content">
        <span className="card-content-one">{obj.score}</span>
        <span className="card-content-two">
          {obj.status === 'up' ? (
            <BsFillArrowUpRightSquareFill />
          ) : (
            <BsFillArrowDownLeftSquareFill />
          )}
        </span>
      </span>
    </div>
  )
}

export default Quality
