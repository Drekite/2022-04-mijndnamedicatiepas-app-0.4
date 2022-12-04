import fetch from 'node-fetch'

/**
 * Returns boolean value of the check if an array consists of only integers.
 * An empty array is counted as true.
 * @function isIntArray
 * @param  {Array}   arr  array to tell whether it consists of only integers.
 * @return {boolean}      whether it is an array containing integers only.
 */
function isIntArray (arr) {
  return arr.every(element => {
    return typeof element === 'number'
  })
}

/**
 * Getting the JSON from an API call of listed tsitnrs ('Thesaurus itemnummer')
 * @function api
 * @param  {Array[int]} tsitnrs  list of integers for advice generation
 * @return {Array[dict{action: {String (HTML)}, pad: {String}, protocol: {String}}]} content of JSON.
 */
async function api (tsitnrs) {
  // Type check
  if (!Array.isArray(tsitnrs)) { throw TypeError('Argument "tsitnrs" must be passed as array.') }

  // Check if every type in tsitnrs array is integer
  if (!isIntArray(tsitnrs)) { throw Error('Error contains non-integers') }

  // Turn the tsitnrs list into a comma-seperated string
  const str = String(tsitnrs)

  try {
    // Try to get response from API
    const response = await fetch('https://mijndnamedicatiepas.nl/v1/api?tsitnrs=' + str)

    if (!response.ok) {
      // Only happens when there is no connection to the API
      throw new Error(`Error! status: ${response.status}`)
    }
    // Turn JSON into array of dictionaries.
    const result = await response.json()
    return result
  } catch (err) {
    // Only happens when the URL or JSON is invalid, but will only happen on API side.
    throw new Error(err)
  }
}

export default api
