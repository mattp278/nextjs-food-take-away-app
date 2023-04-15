export const convertToReableDate = (dateString: string) => {
  const dateObj = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return new Intl.DateTimeFormat('en-GB', options).format(dateObj)
}
