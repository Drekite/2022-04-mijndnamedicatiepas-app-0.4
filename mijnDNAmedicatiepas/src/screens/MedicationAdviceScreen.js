/**
 * MedicationAdviceScreen.js
 * Contributors: Rachel Dijkstra, Lex Janssens
 * Description: This is the medication advice screen of the app
 */
import React, { useState } from 'react' // import react
import { Text, View, Button } from 'react-native' // import react-native
import Stylesheet from '../styles/StyleSheet' // stylesheet

/**
 * Prints the medication advice screen, with two buttons to navigate
 * to the about screen, and the share screen, stylesheet used is "Container"
 * @const MedicationAdviceScreen screen component
 * @param navigation makes navigation between screens possible
 * @return {View} GUI of the medication advice screen
 */
const MedicationAdviceScreen = ({ navigation }) => {
  // define that QRString is string
  let QRString = useState('')
  // define text for QR
  QRString = 'This is a medicationAdvice'
  return (
    <View style={Stylesheet.container}>
      <Text>U bent nu op het medicatie-advies scherm</Text>
      <Button
        // Button to navigate to the about screen
        title="Naar het about scherm"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        // Button to navigate to the Sharescreen
        title="Naar het deelscherm"
        onPress={() => {
          // 1. Navigate to the Details route with QRString
          navigation.navigate('Share', { QrString: QRString })
        }}
      />
    </View>
  )
}

// export MedicationAdviceScreen function
export default MedicationAdviceScreen
