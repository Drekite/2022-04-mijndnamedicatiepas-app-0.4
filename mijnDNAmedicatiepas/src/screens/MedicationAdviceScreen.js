/**
 * MedicationAdviceScreen.js
 * Contributors: Rachel Dijkstra, Lex Janssens
 * Description: This is the medication advice screen of the app
 */
import React, { Component } from 'react'; // import react
import { Text, View, Button } from 'react-native'; // import react-native
import Stylesheet from '../styles/StyleSheet'; //stylesheet

/**
 * Prints the medication advice screen, showing a text with "U bent nu op het 
 * medicatie-advies scherm", and two buttons to navigate to the about screen,
 * and the share screen, stylesheet used is "Container"
 * @class MedicationAdviceScreen
 * @render renders screen
 * @return {View} GUI of the medication advice screen
 */
class MedicationAdviceScreen extends Component {
  render() {
    return (
      <View style={Stylesheet.container}>
        <Text>U bent nu op het medicatie-advies scherm</Text>
        <Button 
          //Button to navigate to the about screen
          title="Naar het about scherm"
          onPress={() => this.props.navigation.navigate('About')}
        />
        <Button
          //Button to navigate to the Sharescreen
          title="Naar het deelscherm"
          onPress={() => this.props.navigation.navigate('Share')}
        />
      </View>
    );
  }
}
  
export default MedicationAdviceScreen;