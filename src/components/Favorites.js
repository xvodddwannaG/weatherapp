import React, { useEffect } from 'react';
import './favorites.css'



export const Favorites = (props) => {

    useEffect(() => {
        document.querySelector('.add').setAttribute('disabled', 'disabled')
    }, [])


    if (props.inputValid == 'is-valid') {
        document.querySelector(".add").removeAttribute('disabled')
    }

    const btnFav = (e) => {
        e.preventDefault()
        props.fetchApi(e.target.dataset.item)
    }


    return (
        <div>
            <button className="btn btn-success btn-sm add" onClick={props.addFavorites} > Add city to Favorites</button>
            <div className="favorites">
                Favorites:
                <br />
                {props.favorites !== null ?
                    props.favorites.map((item, index) => (
                        <button className="btn btn-primary" data-item={item} key={index} onClick={btnFav}>{item}</button>
                    ))
                    : 'Empty'}
            </div>
        </div>
    )
}

