import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen';
import AddTaskScreen from '../screen/AddTaskScreen';
import DetailsScreen from '../screen/DetailsScreen';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            animation: 'slide_from_right',
            animationDuration: 3500
        }}>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AddTaskScreen"
                component={AddTaskScreen}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            {/* <Stack.Group screenOptions={{ presentation: 'modal', animation: 'slide_from_bottom', headerShown: false }}>
                <Stack.Screen
                    name="AddTaskScreen"
                    component={AddTaskScreen}
                />
            </Stack.Group> */}
            <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default RootStack