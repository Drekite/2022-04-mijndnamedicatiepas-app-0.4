/**
 * ImportScreen.js
 * Contributors: Jennifer Lee, Rachel Dijkstra, Lex Janssens
 * Description: This is the importscreen of the app
 */
import React, { useState } from 'react' // import react
import { Text, View, Button } from 'react-native' // import react native
import { StatusBar } from 'expo-status-bar' // import expo
import Stylesheet from '../styles/StyleSheet' // stylesheet

import { readDocument } from '../components/Parsing' // import readDocument to read vcf files

/**
 * Prints import screen, with text "Selecteer het document dat u wilt importeren",
 * a button to get vcf file and navigate to medication screen, stylesheet used is "Container"
 * @const ImportScreen screen component
 * @param navigation makes navigation between screens possible
 * @return {View} GUI of the import screen
 */
const ImportScreen = ({ navigation }) => {
  // initial state that keeps track of imported files
  const [variantFile, setVariantFile] = useState(false)
  const [coverageFile, setCoverageFile] = useState(false)

  // Read Vcf document, navigate and take of stack
  navigateAndParseOnFilesImport = () => {
    if (variantFile && coverageFile) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Medication' }]
      })
    }
  }

  // When pressing select coverage button read, check, and parse file
  importVariant = () => {
    readDocument('variant').then((response) => {
      setVariantFile(response)
      this.navigateAndParseOnFilesImport()
    })
  }

  // When pressing select coverage button read, check, and parse file
  importCoverage = () => {
    readDocument('coverage').then((response) => {
      setCoverageFile(response)
      this.navigateAndParseOnFilesImport()
    })
  }

  return (
    <View style={Stylesheet.container}>
      <Text>Selecteer het document dat u wilt importeren</Text>
      <Button
        // button navigates to documents to select one and navigates to the medication screen after
        title='Select variant Document'
        onPress={this.importVariant}
      />
      <Button
        // button navigates to documents to select one and navigates to the medication screen after
        title='Select coverage Document'
        onPress={this.importCoverage}
      />
      <StatusBar style='auto' />
    </View>
  )
}

// export ImportScreen component
export default ImportScreen
