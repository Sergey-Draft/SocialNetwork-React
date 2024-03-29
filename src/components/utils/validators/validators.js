


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

export const minLength = min => value =>
  (value && value.length < min) ?  `Must be ${min} characters or more` : undefined

  
export const email = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
}