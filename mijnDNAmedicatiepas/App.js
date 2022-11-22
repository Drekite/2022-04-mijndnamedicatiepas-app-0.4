/**
 * App.js
 * Contributors: Jennifer Lee, Rachel Dijkstra, Lex Janssens
 * Description: This is the main file of the app
 */
import { NavigationContainer } from '@react-navigation/native'; // @react-navigation/native navigation container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //@react-navigation/native-stack createNativeStackNavigator

import MedicationAdviceScreen from './src/screens/MedicationAdviceScreen'; // Medication advice screen
import ImportScreen from './src/screens/ImportScreen'; // import screen
import AboutScreen from './src/screens/AboutScreen'; // about screen
import ShareScreen from './src/screens/ShareScreen'; // share screen

const Stack = createNativeStackNavigator(); // creates stacknavigator that navigates between screens by using stacks, these stacks
// get added to te stack when navigating to the screen, and gets off the stack when the user navigates back

/**
 * displays the main app, the first screen is the medication screen that shows
 * a button to the about screen.
 * @function App
 * @return {NavigationContainer} GUI where navigation between multiple screens is possible
 */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Import" component={ImportScreen} />
        <Stack.Screen name="Medication" component={MedicationAdviceScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
