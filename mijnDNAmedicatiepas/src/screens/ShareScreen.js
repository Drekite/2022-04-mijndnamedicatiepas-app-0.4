/**
 * ShareScreen.js
 * Contributors: Rachel Dijkstra, Lex Janssens
 * Description: This is the sharescreen of the app
 */
import React, { Component } from 'react'; // import react
import { Text, View, Button } from 'react-native'; // import react-native
import { GenerateQR } from '../components/Share';
import Stylesheet from '../styles/StyleSheet'; //stylesheet

/**
 * Prints the share screen, showing a text with "U bent nu op het deelscherm",
 * and a button to navigate back to the medication advice screen, stylesheet used is "Container"
 * @class ShareScreen
 * @render renders screen
 * @return {View} GUI of the import screen
 */
class ShareScreen extends Component {
  render() {
    return (
      <View style={Stylesheet.container}>
        <Text>U bent nu op het deelscherm</Text>
        {/* Create react component with QR code; TODO call this with a parameter */}
        {GenerateQR("Hello world")}
        <Button
          // Button to navigate to the medication advice screen
          title="Terug naar medicatie-advies"
          onPress={() => this.props.navigation.navigate('Medication')}
        />
      </View>
    );
  }
}

export default ShareScreen;