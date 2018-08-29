const map = (arr = [], func = (item) => item) => {
    if(arr.length === 0)
        return []
        
    const [head, ...tail] = arr
    return [func(head)].concat(map(tail, func))
}
export default map;