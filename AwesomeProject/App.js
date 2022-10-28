// import { View, Text } from 'react-native'
// import React from 'react'
// import Demo from './Components/Demo'

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

import React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Demo from './Components/Demo'
import Others from './Components/Others';
import About from './Components/About';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: 'bold' }}>
//         I am Ameen Ansari
//       </Text>
//       <Text style={{ textAlign: 'center', fontSize: 17 }}>
//         Welcome To My Demo Component
//       </Text>
//     </View>
//   );
// }


// function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Demo} />
//         <Stack.Screen name="About" component={About} />
//         <Stack.Screen name="Others" component={Others} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

//////--------------->
//Tab Navigation Done
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Demo}   />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Others" component={Others} />
      </Tab.Navigator>                                
    </NavigationContainer>
  );
}
