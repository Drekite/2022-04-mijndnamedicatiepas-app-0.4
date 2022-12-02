/**
 * Parsing.js
 * Contributors: Jennifer Lee
 * Description: This file parses Varda files to object
 */
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import { Alert } from 'react-native'

/**
 * Getting document and return it's content as a string.
 * @function readDocument
 * @param  {string} typeVarda  the type of the varda file: either variant or coverage
 * @return {string}            content of the Varda file
 */
async function readDocument (typeVarda) {
  // pick document, can only select .varda files
  let documentImported = false
  const result = await DocumentPicker.getDocumentAsync({ type: 'application/octet-stream' })

  // When document is succesfully retrieved
  if (result.type === 'success') {
    // Read file as a string
    const vardaInfo = await FileSystem.readAsStringAsync(result.uri)
    const vardaLines = vardaInfo.split('\n')
    const columns = vardaLines[0].split('\t').length

    if (checkIfRightFile(typeVarda, columns)) {
      parsingVarda(vardaLines, typeVarda)
      documentImported = true
    }
  }
  if (result.type === 'cancel') { Alert.alert('Document importeren is geannuleerd') }

  return documentImported
}

/**
 * Checks if a variant or coverage file is selected
 * @function checkIfRightFile
 * @param  {string} typeVarda   the type of the varda file: either variant or coverage
 * @param  {int}    columns     amount of columns in the varda file
 * @return {boolean}            returns boolean if the file is a variant or coverage file
 */
function checkIfRightFile (typeVarda, columns) {
  // Check if file has the right amount of columns
  if ((typeVarda === 'variant' && columns !== 7) || (typeVarda === 'coverage' && columns !== 4)) {
    Alert.alert('Voer een geldige ' + typeVarda + ' varda file in.')
    return false
  }
  return true
}

/**
 * Parsing the Varda information to an array of objects
 * @function parsingVarda
 * @param  {Object} vardaLines  the lines of Varda file
 * @param  {string} typeVarda   the type of the varda file: either variant or coverage
 * @return {Object}             returns an array of parsed information of the varda file in objects
 */
function parsingVarda (vardaLines, typeVarda) {
  const parsedVarda = []

  // splitting the string with enters and getting the data per line
  for (const line of vardaLines) {
    // when the line is not empty
    if (line.length !== 0) {
      const parsedLine = {}
      let keys = []

      if (typeVarda === 'variant') { keys = ['chrom', 'start', 'end', 'ploidy', 'phase_set', 'inserted_length', 'inserted_sequence'] }
      if (typeVarda === 'coverage') { keys = ['chrom', 'start', 'end', 'ploidy'] }

      // splitting the string with tabs to parse the different collumns
      const data = line.split('\t')
      for (const j in data) {
        // filling in the object
        parsedLine[keys[j]] = data[j]
      }

      // pushing the object to parsedVarda
      parsedVarda.push(parsedLine)
    }
  }
  return parsedVarda
}

module.exports = {
  readDocument,
  checkIfRightFile,
  parsingVarda
}

export default readDocument
