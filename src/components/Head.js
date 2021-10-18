import React from 'react'

export default function Head(props) {
    return (
        <div className="header__header">
          <h2>
            {props.el1}
            {props.el2 && <br />}
            {props.el2}
            <br />
            <span>{props.el3}</span>
          </h2>
        </div>
    )
}
