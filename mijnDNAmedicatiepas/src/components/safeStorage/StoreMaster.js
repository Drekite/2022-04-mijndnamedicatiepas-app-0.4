/**
 * StoreMaster.js
 * Contributors: Sybe van Benthum, Lucas van Osenbruggen
 * Description: functions to retrieve information from save storage and decrypt it
 */
import { SaveToSecureStorage, GetFromSecureStorage, DeleteFromSecureStorage } from '../safeStorage/AccessSecureStorage'
import { SaveToStorage, GetFromStorage, DeleteFromStorage } from '../safeStorage/AccessStorage'
import { GenerateKey, Encrypt, Decrypt } from '../safeStorage/Encrypt'

/**
 * Get decrypted string from storage
 * @function GetEncryptedString
 * @param {String} keyName the name of the key value in secure storage
 * @param {String} storageName the name of the value in storage
 * @return {String} decrypted string from storage
 */
async function GetEncryptedString (keyName, storageName) {
  if (typeof (keyName) !== 'string') {
    throw TypeError("Argument keyName must be of type 'string'")
  }
  if (typeof (storageName) !== 'string') {
    throw TypeError("Argument storageName must be of type 'string'")
  }
  const key = await GetFromSecureStorage(keyName) // Get encryption key
  const encryptedString = await GetFromStorage(storageName) // Get encrypted string
  const string = await Decrypt(encryptedString, key) // Decrypt string
  return string
}
/**
 * Generate encryption key, encrypt string and save string securely to storage
 * @function SaveStringAndKey
 * @param {string} string string that will be encrypted and stored
 * @param {string} secureStoreKey the access key for secure storage
 * @param {string} storageKey the access key for normal file storage
 */
async function SaveStringAndKey (string, secureStoreKey, storageKey, storageSize) {
  if (typeof string !== 'string' || typeof secureStoreKey !== 'string' || typeof storageKey !== 'string') { // type checking
    throw TypeError("One or more of the types are not 'string'")
  };
  if (string.length < 1 || secureStoreKey.length < 1 || storageKey.length < 1) { // length checking
    throw Error('string and/or key(s) to short')
  }
  try {
    // The encryption key is generated
    const key = await GenerateKey()
    // Save this key to secure storage so it can accesed later
    await SaveToSecureStorage(secureStoreKey, key)
    // The string with the varda information is encrypted
    const encryptedString = await Encrypt(string, key)
    // The encrypted string is saved to big file storage of the system
    await SaveToStorage(encryptedString, storageKey, storageSize)
  } catch (e) {
    // If any error occurs, delete from the storage and
    // throw the errors. If deletion is not possible,
    // the keys are likely not there.
    try {
      await DeleteFromSecureStorage(secureStoreKey)
      await DeleteFromStorage(storageKey)
    } catch (ee) {
      throw Error(ee, e)
    }
    throw Error(e)
  }
  return true
}

module.exports = {
  GetEncryptedString,
  SaveStringAndKey
}
export default GetEncryptedString
