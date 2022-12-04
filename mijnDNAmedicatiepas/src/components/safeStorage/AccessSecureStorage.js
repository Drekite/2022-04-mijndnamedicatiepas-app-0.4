/**
 * AccessSecureStorage.js
 * Contributors: Sybe van Benthum, Lucas van Osenbruggen
 * Description: functions to access the secure storage api aka keychain
 */
import * as SecureStore from 'expo-secure-store'

/**
 * Save the encryption key used to encrypt the VARDA, to save storage aka the keychain
 * @function SaveToSecureStorage
 * @param {string} key the key for the key-value storage
 * @param {string} encryptionKey the value that has to be stored
 */
async function SaveToSecureStorage (key, encryptionKey) {
  if (typeof (key) !== 'string' || typeof (encryptionKey) !== 'string') { // type checking
    throw TypeError("Argument(s) is not of type 'string'")
  }
  if (!(await SecureStore.isAvailableAsync())) { // Secure store api not available
    throw Error('Secure store is not avaiable on this device.')
  }

  try {
    await SecureStore.setItemAsync(key, encryptionKey) // save to secure storage
  } catch (e) {
    throw Error('Saving to secure storage failed:' + e)
  }
}

/**
 * Get cryptographic key value from keychain/store
 * @function getFromSecureStorage
 * @param {String} keyName the name of the key to retrieve from secure storage
 * @return {String} value from secure storage
 */
async function GetFromSecureStorage (keyName) {
  if (typeof (keyName) !== 'string') {
    throw TypeError("Argument type must be of type 'string'")
  }
  if (!(await SecureStore.isAvailableAsync())) { // Secure store api not available
    throw Error('Secure store is not avaiable on this device.')
  }

  const result = await SecureStore.getItemAsync(keyName) // Get item by key from keychain/store
  if (result === null) {
    throw ReferenceError(`There was no value stored with the key '${keyName}'`)
  }
  return result
}

/**
 * Delete the encryption key used to encrypt the VARDA from the secure storage
 * @function DeleteFromSecureStorage
 * @param {string} key the key to access the encryption key
 */
async function DeleteFromSecureStorage (key) {
  if (typeof (key) !== 'string') { // type checking
    throw TypeError("Argument key must be of type 'string'")
  }

  try {
    SecureStore.deleteItemAsync(key) // save to secure storage
  } catch (e) {
    throw Error("can't delete from secure storage: " + e)
  }
}

module.exports = {
  SaveToSecureStorage,
  GetFromSecureStorage,
  DeleteFromSecureStorage
}
