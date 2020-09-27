import React from 'react'

export const Card = (props) => {
    let previousRequest = { city: ' ', temp: ' ' }
    const history = JSON.parse(localStorage.getItem('history'))
    if (history !== null) {
        previousRequest = JSON.parse(localStorage.getItem('history'))
    }
    return (
        <div className="card">
            <div className="card-body">
                {props.city && props.temp !== ''
                    ? <div className="card">City: {props.city} , Temp: {props.temp} </div>
                    : <div className="card">City: {previousRequest.city} , Temp: {previousRequest.temp} </div>
                }
            </div>
        </div>
    )
}