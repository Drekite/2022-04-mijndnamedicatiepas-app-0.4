/**
 * Encrypt.js
 * Contributors: Sybe van Benthum, Lucas van Osenbruggen
 * Description: functions to generate encryption key, encrypt a file and decrypt a file
 */
import CryptoES from 'crypto-es'
import * as Random from 'expo-random'
import binaryToBase64 from 'react-native/Libraries/Utilities/binaryToBase64'

/**
 * Generate a crypographical key.
 * @function GenerateKey
 * @return {string}         Cryptographical key
 */
async function GenerateKey () {
  try {
    const KEYSIZE = 256 // keysize is 2048 bits
    const RANDOMBYTES = await Random.getRandomBytesAsync(KEYSIZE)// generate random bytes
    const RANDOMSTRING = binaryToBase64(RANDOMBYTES) // to string
    return RANDOMSTRING
  } catch (e) {
    throw Error('Cant generate key: ' + e)
  }
}

/**
 * Encrypts with AES strings with a custom key
 *  @function Encrypt
 * @param {string} string string that has to be encrypted
 * @param {string} key encryption key
 * @return {string} encrypted string
 */
async function Encrypt (string, key) {
  if (typeof (string) !== 'string' || typeof (key) !== 'string') { // type checking
    throw TypeError("Argument(s) is not of type 'string'")
  }

  try {
    const BYTES = await CryptoES.AES.encrypt(string, key) // Encrypts string
    return BYTES.toString() // to string
  } catch (e) {
    throw Error('Cant encrypt string: ' + e)
  }
}

/**
 * Decrypt string
 * @function Decrypt
 * @param {String} encryptedString the string that is encrypted (no size limit)
 * @param {String} key the key to decrypt the encrypted string
 * @return {String} decrypted string
 */
async function Decrypt (encryptedString, key) {
  if (typeof (encryptedString) !== 'string' || typeof (key) !== 'string') { // type checking
    throw TypeError("Argument(s) is not of type 'string'")
  }

  try {
    const BYTES = await CryptoES.AES.decrypt(encryptedString, key) // Decrypt the encrypted string with some private key using the AES algorithm into a byte representation
    return BYTES.toString(CryptoES.enc.Utf8) // Convert byte representation back to a string representation
  } catch (e) {
    throw Error('Cant decrypt string: ' + e)
  }
}

module.exports = {
  Decrypt,
  Encrypt,
  GenerateKey

}
