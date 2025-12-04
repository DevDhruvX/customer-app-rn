import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VideoCallSetupScreen = ({ navigation }: any) => {
    const [userName, setUserName] = useState('');
    const [callId, setCallId] = useState('');

    const handleStartCall = () => {
        if (userName && callId) {
            navigation.navigate('VideoCall', { userName, callId });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Video Call Setup</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={userName}
                onChangeText={setUserName}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter call ID"
                value={callId}
                onChangeText={setCallId}
            />

            <TouchableOpacity style={styles.button} onPress={handleStartCall}>
                <Text style={styles.buttonText}>Start Video Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.backButton]}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    backButton: {
        backgroundColor: '#757575',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default VideoCallSetupScreen;
