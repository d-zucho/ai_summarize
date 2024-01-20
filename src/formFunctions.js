export const validateInput = (e) => {
  // ensure  url input is not empty
  const input = e.target.value
  if (input === '') {
    alert('Please enter a valid url')
    return false
  }
}
