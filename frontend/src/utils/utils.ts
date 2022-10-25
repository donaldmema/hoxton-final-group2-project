export function getDateToday(date: string){
    const today = new Date(date)
    const day = today.getDay()
    const month = today.getMonth()
    const year = today.getFullYear()
    return `${day}/${month}/${year}`
}