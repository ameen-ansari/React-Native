// import { View, Text } from 'react-native'
// import React from 'react'
// import Demo from './Demo'

// const App = () => {
//   return (
//     <View>
//       <Text style={{textAlign:'center'}}>Welcome to Awesome</Text>
//       <Demo />
//     </View>
//   )
// }
// export default App


// ===========
//From REACT-NAVIGATION
// In App.js in a new project

import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
