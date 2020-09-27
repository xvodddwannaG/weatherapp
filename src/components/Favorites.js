import React, { useEffect, useState } from 'react';
import './favorites.css'



export const Favorites = (props) => {
    const [fav, setFav] = useState('')

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
            <button className="btn btn-success btn-sm add" onClick={() => {
                props.addFavorites(props.city)
                setFav(props.favorites) 
            }} > Add city to Favorites</button>
            <div className="favorites">
                Favorites:
                <br />
                {props.favorites != null ?
                    props.favorites.map((item, index) => (
                        <button className="btn btn-primary" data-item={item} key={index} onClick={btnFav}>{item}</button>
                    ))
                    : 'Empty'}
            </div>
            <hr/>

            <button className="btn btn-danger btn-sm" onClick={props.clearFavorites}> Clear Favorites</button>
        </div>
    )
}

