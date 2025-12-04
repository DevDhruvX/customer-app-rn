import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Step02Screen from '../screens/Step02Screen';
import Step03Screen from '../screens/Step03Screen';
import Step04Screen from '../screens/Step04Screen';
import Step05Screen from '../screens/Step05Screen';
import Step06Screen from '../screens/Step06Screen';
import Step07Screen from '../screens/Step07Screen';
import Step08Screen from '../screens/Step08Screen';
import Step09Screen from '../screens/Step09Screen';
import Step10Screen from '../screens/Step10Screen';
import Step11Screen from '../screens/Step11Screen';
import Step12Screen from '../screens/Step12Screen';
import Step13Screen from '../screens/Step13Screen';
import Step14Screen from '../screens/Step14Screen';
import AppointmentDetailsScreen from '../screens/AppointmentDetailsScreen';
import BookingsScreen from '../screens/BookingsScreen';
import VideoCallSetupScreen from '../screens/VideoCallSetupScreen';
import VideoCallScreen from '../screens/VideoCallScreen';

export type RootStackParamList = {
    Splash: undefined;
    Step02: undefined;
    Step03: undefined;
    Step04: undefined;
    Step05: undefined;
    Step06: undefined;
    Step07: undefined;
    Step08: undefined;
    Step09: undefined;
    Step10: undefined;
    Step11: undefined;
    Step12: undefined;
    Step13: undefined;
    Step14: undefined;
    AppointmentDetails: undefined;
    Bookings: undefined;
    VideoCallSetup: undefined;
    VideoCall: { userName: string; callId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Step02" component={Step02Screen} />
                <Stack.Screen name="Step03" component={Step03Screen} />
                <Stack.Screen name="Step04" component={Step04Screen} />
                <Stack.Screen name="Step05" component={Step05Screen} />
                <Stack.Screen name="Step06" component={Step06Screen} />
                <Stack.Screen name="Step07" component={Step07Screen} />
                <Stack.Screen name="Step08" component={Step08Screen} />
                <Stack.Screen name="Step09" component={Step09Screen} />
                <Stack.Screen name="Step10" component={Step10Screen} />
                <Stack.Screen name="Step11" component={Step11Screen} />
                <Stack.Screen name="Step12" component={Step12Screen} />
                <Stack.Screen name="Step13" component={Step13Screen} />
                <Stack.Screen name="Step14" component={Step14Screen} />
                <Stack.Screen
                    name="AppointmentDetails"
                    component={AppointmentDetailsScreen}
                />
                <Stack.Screen name="Bookings" component={BookingsScreen} />
                <Stack.Screen name="VideoCallSetup" component={VideoCallSetupScreen} />
                <Stack.Screen name="VideoCall" component={VideoCallScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
