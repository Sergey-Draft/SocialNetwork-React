


export const required = (value) => {
    if (value) return undefined
    return 'Requied'
}


export const maxLength = (max) => {
    return (value) => {
       if (value && value.length > max) return  `Must be ${max} characters or less`
       return undefined
    }
}