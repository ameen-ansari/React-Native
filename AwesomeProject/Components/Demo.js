import React from "react";
import { Text, View ,Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Demo = ({navigation}) => {
    return (
        <View >
            <Text style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold' }}>
                Welcome To Home Page
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: 'bold' }}>
                I am Ameen Ansari
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                Welcome To My Demo Component
            </Text>
            <Text style={{ textAlign: 'center' }}>
                Finally Done
            </Text>
            <Button
                title="About"
                onPress={()=>navigation.navigate('About')}
            />
        </View>
    )
}
export default Demo
