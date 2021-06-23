import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeWork from '../Teacher/HomeWork';
import Addassignment from '../Teacher/Addassignment';
import Addnotes from '../Teacher/Addnotes';
import Addvideos from '../Teacher/Addvideos';
import Addlabmanuals from '../Teacher/Addlabmanuals';
import Addpapers from '../Teacher/Addpapers';

const Stack = createStackNavigator();
 
export default function Learningtab(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Homework" options={{headerShown: false}} >
                <Stack.Screen options={{headerShown:false}} name="HomeWork" component={HomeWork}/>
                <Stack.Screen options={{headerShown: false}} name="Addassignment" component={Addassignment}/>
                <Stack.Screen options={{headerShown: false}}  name="Addnotes" component={Addnotes}/>
                <Stack.Screen options={{headerShown: false}} name="Addvideos" component={Addvideos}/>
                <Stack.Screen options={{headerShown: false}} name="Addlabmanuals" component={Addlabmanuals}/>
                <Stack.Screen options ={{headerShown: false}} name="Addpapers" component={Addpapers}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}