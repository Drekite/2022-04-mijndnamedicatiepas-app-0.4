/**
  * expo-secure-store.js
  * Contributors: Lucas van Osenbruggen, Sybe van Benthum
  * Description: mocks the react native secure store module which is not available here
  */

const storage = {} // Stores keys

/**
 * Mock get item function.
 * @function getItemAsync
 * @param  {string} [key]  key to get
 * @return {string}        value to return if no key, null is returned
 */
async function getItemAsync (key) {
  if (storage[key] === undefined) {
    return null
  }
  return storage[key]
}
/**
 * Mock delete item function
 * @function deleteItemAsync
 * @param  {string} [key]  key to delete
 */
async function deleteItemAsync (key) {
  storage[key] = undefined
}
/**
 * Mock set item function.
 * @function setItemAsync
 * @param  {string} [key]  key to set
 * @param  {string} [value]  value to set
 */
async function setItemAsync (key, value) {
  storage[key] = value
}
/**
 * Mock is available check, check wether the api is available on device
 * @function isAvailableAsync
 */
async function isAvailableAsync () {
  return true
}

module.exports = {
  getItemAsync,
  setItemAsync,
  isAvailableAsync,
  deleteItemAsync
}
