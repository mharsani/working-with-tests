 const every = (arr, func) => {
    for(let i = 0; i < arr.lenght; i++){
        if(!func(arr[i]), i) {
            return false
        }
    }
    return true
}

export default every