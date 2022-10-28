import React from "react";
import { Text, View ,Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const About = ({navigation}) => {
    return (
        <View >
            <Text style={{textAlign:'center' , fontSize:32 , fontWeight:'bold'}}>
              Welcome To About Page
            </Text>
            <Text style={{textAlign:'center' , fontSize:28 , fontWeight:'bold'}}>
              I am Ameen Ansari
            </Text>
            <Text style={{textAlign:'center' , fontSize:17}}>
                Welcome To My Demo Component
            </Text>
            <Text style={{textAlign:'center'}}>
                Finally Done
            </Text>
            <Button
                title="Others"
                onPress={()=>navigation.navigate('Others')}
            />
        </View>
    )
}
export default About