export function getDateToday(){
    const today = new Date()
    const day = today.getDay()
    const month = today.getMonth()
    const year = today.getFullYear()
    return `${day}/${month}/${year}`
}