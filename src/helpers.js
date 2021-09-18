function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export { saveToLocalStorage, getFromLocalStorage };