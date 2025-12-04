import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { zegoConfig } from '../config/zegoConfig';

const VideoCallScreen = ({ route, navigation }: any) => {
    const { userName, callId } = route.params || {};

    // Check if Zego credentials are configured
    if (zegoConfig.appID === 123456789 || zegoConfig.appSign === 'YOUR_APP_SIGN_HERE') {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorTitle}>⚠️ Zego Not Configured</Text>
                <Text style={styles.errorText}>
                    Please configure Zego credentials:
                </Text>
                <Text style={styles.errorStep}>
                    1. Go to https://console.zegocloud.com/
                </Text>
                <Text style={styles.errorStep}>
                    2. Create a project and get AppID & AppSign
                </Text>
                <Text style={styles.errorStep}>
                    3. Update src/config/zegoConfig.ts
                </Text>
                <Text style={styles.errorStep}>
                    4. Rebuild the app
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={zegoConfig.appID}
                appSign={zegoConfig.appSign}
                userID={userName || 'user_' + Date.now()}
                userName={userName || 'Guest'}
                callID={callId || 'default_call'}
                config={{
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID: string, reason: any, duration: number) => {
                        navigation.navigate('Bookings');
                    },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    errorContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    errorTitle: {
        fontSize: 28,
        color: '#ff6b6b',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 30,
        textAlign: 'center',
    },
    errorStep: {
        fontSize: 16,
        color: '#aaa',
        marginBottom: 15,
        paddingLeft: 10,
    },
});

export default VideoCallScreen;
