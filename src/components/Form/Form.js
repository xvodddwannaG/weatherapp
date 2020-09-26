import React, {useState} from 'react'


export const Form = (props) => {

    const [inputCity, setInputCity] = useState('');
    
    let formValid = 'form-control'

    const submitForm = (event) => {
        event.preventDefault()
        props.fetchApi(inputCity)
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" className={formValid + ' ' + props.inputValid}
                placeholder="city"
                onChange={(event) => setInputCity(event.target.value)}
                value={inputCity}
            >
            </input>
        </form>
    )
}
