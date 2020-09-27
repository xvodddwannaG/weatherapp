export let favoritesStorage = []


export const addFavorites = (city) => {
    document.querySelector('.add').setAttribute('disabled', 'disabled')
    if (favoritesStorage.includes(city)) {
        alert('favorite includes u city')
    } else {
        favoritesStorage.push(city)
    }
    localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
}


if (JSON.parse(localStorage.getItem('favorites')) === null) {
    favoritesStorage = []
    localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
} else {
    favoritesStorage = JSON.parse(localStorage.getItem('favorites'))
}

export const clearFavorites = (e) => {
    e.preventDefault()
    console.log('click');
    localStorage.setItem('favorites', JSON.stringify([]))
}
