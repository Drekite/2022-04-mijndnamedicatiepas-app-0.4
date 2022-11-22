/**
 * ImportScreen.js
 * Contributors: Jennifer Lee, Rachel Dijkstra, Lex Janssens
 * Description: This is the importscreen of the app
 */
import React, { Component } from 'react'; // import react
import { Text, View, Button } from 'react-native'; // import react native
import { StatusBar } from 'expo-status-bar'; // import expo
import Stylesheet from '../styles/StyleSheet'; //stylesheet

import { readDocument } from '../components/Parsing'; // import readDocument to read vcf files

/**
 * Prints import screen, with text "Selecteer het document dat u wilt importeren", 
 * a button to get vcf file and navigate to medication screen, stylesheet used is "Container"
 * @class ImportScreen
 * @FunctionToImportAndNavigate function to select vcf file and navigate to medicationscreen
 * @render renders screen
 * @return {View} GUI of the import screen
 */
class ImportScreen extends Component {
  // Read Vcf document, navigate and take of stack
  importVcfAndNavigate = () =>
  {
    readDocument();
    // take import screen of stack and navigate
    this.props.navigation.reset({
      index: 0,
      routes: [{name: 'Medication'}],
    });
  }
  render() {
    return (
      <View style={Stylesheet.container}>
        <Text>Selecteer het document dat u wilt importeren</Text>
        <Button
          // button navigates to documents to select one and navigates to the medication screen after
          title="Select Document"
          onPress={this.importVcfAndNavigate}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

// export ImportScreen component
export default ImportScreen;