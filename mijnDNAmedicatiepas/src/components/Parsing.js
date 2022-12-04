/**
 * Parsing.js
 * Contributors: Jennifer Lee
 * Description: This file parses Varda files to object
 */
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

/**
 * Getting document and return it's content as a string.
 * @function readDocument
 * @return {string}          content of the Varda file
 */
async function readDocument() {
  // pick document, can only select .varda files
  let result = await DocumentPicker.getDocumentAsync({type:"application/octet-stream"});    
  if(result.type == "success"){
    // get document information as a string
    const vardaInfo = await FileSystem.readAsStringAsync(result.uri);
    // parse varda file 
    parsingVarda(vardaInfo);
  }

  if(result.type == "cancel")
    alert("Document importeren is geannuleerd");
}

/**
 * Parsing the Varda information to an array of objects
 * @function parsingVarda
 * @param  {string} vardaInfo  the content of Varda file
 * @return {Object}            returns an array of parsed information of the varda file in objects
 */
function parsingVarda(vardaInfo){
  let parsedVarda = [];

  // splitting the string with enters and getting the data per line
  const lines =  vardaInfo.split("\n");
  for(let line of lines){
    // when the line is not empty
    if(line.length != 0){
      let parsedLine = {
        column0: '',
        column1: '',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
        column6: ''
      };
      // splitting the string with tabs to parse the different collumns
      const data = line.split("\t");

      for(let j in data){
        // filling in the object
        parsedLine[Object.keys(parsedLine)[j]] = data[j];
      }

      // pushing the object to parsedVarda
      parsedVarda.push(parsedLine);
    }
  }
  return parsedVarda;
}

module.exports = {
    readDocument,
    parsingVarda
}

export default readDocument