export const getCurrentDate = () => {
    const d = new Date();

    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}
