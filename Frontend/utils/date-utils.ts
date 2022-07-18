export const parseDate = (respDate: string): string => {
    if (respDate == "empty") return ""
    const date = new Date(new Date(Date.parse(respDate)).toLocaleString())
    const local = new Date(Date.now())
    const hours = date.getHours() < 10 ? "0" + date.getHours(): date.getHours()
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes()
    if (date.getDay() < local.getDay()) return "Yesterday"
    if (date.getDay() == local.getDay() && date.getDate() == local.getDate()) return hours + ":" + minutes
    return date.toLocaleDateString()
}

