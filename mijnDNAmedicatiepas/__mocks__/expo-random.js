/**
  * expo-random.js
  * Description: mocks secure generation of random numbers available on mobile platforms.
  * https://stackoverflow.com/questions/57985931/jest-mock-how-to-mock-random-output-with-react-native-randombytes
  * Author: Lucas van Osenbruggen
  */

/**
 * Mock getting of random butes.
 * @function getRandomBytesAsync
 * @param  {int} [size]  number of bytes
 * @return {Uint8Array}  array of bytes
 */
async function getRandomBytesAsync (size) {
  let uint8 = new Uint8Array(size)
  uint8 = uint8.map(() => Math.floor(Math.random() * 90) + 10)
  return uint8
}

const Random = {
  getRandomBytesAsync
}

module.exports = {
  getRandomBytesAsync
}

export default Random
