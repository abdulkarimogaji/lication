export const parseDate = (respDate: string): string => {
    const date = new Date(new Date(Date.parse(respDate)).toLocaleString())
    const local = new Date(Date.now())
    if (date.getDay() < local.getDay()) return "Yesterday"
    if (date.getDay() == local.getDay() && date.getDate() == local.getDate()) return date.getHours() + ":" + date.getMinutes()
    return date.toLocaleDateString()
}

