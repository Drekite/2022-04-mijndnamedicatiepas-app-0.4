/**
 * ShareScreen.js
 * Contributors: Rachel Dijkstra, Lex Janssens
 * Description: This is the sharescreen of the app
 */
import React from 'react' // import react
import { Text, View, Button } from 'react-native' // import react-native
import { GenerateQR } from '../components/Share'
import Stylesheet from '../styles/StyleSheet' // stylesheet

/**
 * Prints the share screen, showing a text with "U bent nu op het deelscherm",
 * and a button to navigate back to the medication advice screen, stylesheet used is "Container"
 * @const ShareScreen screen component
 * @param navigation makes navigation between screens possible
 * @param route makes possible to retrieve params from route
 * @return {View} GUI of the import screen
 */
const ShareScreen = ({ navigation, route }) => {
  return (
    <View style={Stylesheet.container}>
      <Text>U bent nu op het deelscherm</Text>
      {/* Create react component with QR code and given parameter */}
      {GenerateQR(route.params.QrString)}
      <Button
        // Button to navigate to the medication advice screen
        title="Terug naar medicatie-advies"
        onPress={() => navigation.navigate('Medication')}
      />
    </View>
  )
}

// export ShareScreen function
export default ShareScreen
