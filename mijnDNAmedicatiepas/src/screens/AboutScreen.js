/**
 * AboutScreen.js
 * Contributors: Rachel Dijkstra, Lex Janssens
 * Description: This is the Aboutscreen of the app
 */
import React, { Component } from 'react'; // import react
import { Text, View, Button } from 'react-native'; // import react native
import Stylesheet from '../styles/StyleSheet'; //stylesheet

/**
 * Prints the about screen, showing a text with "U bent nu op het about scherm", 
 * and a buttons to navigate back to the medication-advice screen, stylesheet used is "Container"
 * @class AboutScreen
 * @render renders screen
 * @return {View} GUI of the import screen
 */
class AboutScreen extends Component {
  render() {
    return (
      <View style={Stylesheet.container}>
        <Text>U bent nu op het about scherm</Text>
        <Button 
          //Button to navigate to the import screen
          title="Terug naar medicatie advies"
          onPress={() => this.props.navigation.navigate('Medication')}
        />
      </View>
    );
  }
}


export default AboutScreen;