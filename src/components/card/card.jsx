import React from 'react'

const CardComponent = (props) => {
    return (
        <>
            <div className="card p-3 bg-primary-subtle border border-primary-subtle rounded-3">
                <img src={props.portada} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-primary-emphasis">{props.titulo}</h5>
                    <p className="card-text">{props.sinopsis}</p>
                    <p className="card-text text-success-emphasis ">{props.duracion}</p>

                </div>
                <ul className="list-group list-group-flush bg-warning-subtle border border-warning-subtle rounded-3">
                    <li className="list-group-item">{props.actor1}</li>
                    <li className="list-group-item">{props.actor2}</li>
                    <li className="list-group-item">{props.actor3}</li>
                </ul>
            </div>
        </>
    )
}

export default CardComponent
