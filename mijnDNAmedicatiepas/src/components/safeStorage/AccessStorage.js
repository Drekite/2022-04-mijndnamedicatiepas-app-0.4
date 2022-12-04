/**
 * AccessStorage.js
 * Contributors: Sybe van Benthum, Lucas van Osenbruggen
 * Description: functions to access normal, key-value, system storage
 */
import * as FileSystem from 'expo-file-system'

/**
 * Save a string to normal system file storage via key-value way
 * @function SaveToStorage
 * @param {string} encryptedString the string that is encrypted and will be stored as value in the key-value store
 * @param {string} key the key for the key-value storage
 */
const SaveToStorage = async (value, storageKey) => {
  const FILENAME = FileSystem.documentDirectory + storageKey
  try {
    await FileSystem.writeAsStringAsync(FILENAME, value)
  } catch (e) {
    throw Error('Failed to save to file storage:' + e)
  }
}

/**
 * Get string from normal storage
 * @function GetFromStorage
 * @param {String} storageName the name of the value to retrieve from storage
 * @return {String} string from storage
 */
const GetFromStorage = async (storageName) => {
  if (typeof (storageName) !== 'string') {
    throw TypeError("Argument must be of type 'string'")
  }
  const FILENAME = FileSystem.documentDirectory + storageName
  let value = ''
  try {
    value = await FileSystem.readAsStringAsync(FILENAME)
    if (value) {
      return value
    } else {
      throw ReferenceError(`There was no value stored with the key '${storageName}'`, e)
    }
  } catch (e) {
    if (e instanceof ReferenceError) {
      throw ReferenceError(`The key '${FILENAME}' does not exist: ` + e)
    } else {
      throw Error('Getting item failed: ' + e)
    }
  }
}

/**
 * Delete a string from normal system file storage via key-value way
 * @function DeleteFromStorage
 * @param {string} key the key for the key-value storage
 */
const DeleteFromStorage = async (storageKey) => {
  if (typeof (storageKey) !== 'string') { // type checking
    throw TypeError("Argument key must be of type 'string'")
  }

  const FILENAME = FileSystem.documentDirectory + storageKey
  try {
    await FileSystem.deleteAsync(FILENAME) // delete
  } catch (e) { // if fails return error
    throw Error("Can't remove string from storage: " + e)
  }
}

module.exports = {
  DeleteFromStorage,
  SaveToStorage,
  GetFromStorage
}
