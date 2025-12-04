import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VideoCallScreen = ({ route, navigation }: any) => {
    const { userName, callId } = route.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.videoPlaceholder}>
                <Text style={styles.placeholderText}>Video Call Screen</Text>
                <Text style={styles.infoText}>User: {userName}</Text>
                <Text style={styles.infoText}>Call ID: {callId}</Text>
                <Text style={styles.noteText}>
                    Note: Zego SDK video calling will be integrated here
                </Text>
            </View>

            <TouchableOpacity
                style={styles.endButton}
                onPress={() => navigation.navigate('Bookings')}
            >
                <Text style={styles.buttonText}>End Call</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    placeholderText: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    noteText: {
        fontSize: 14,
        color: '#aaa',
        marginTop: 30,
        textAlign: 'center',
    },
    endButton: {
        position: 'absolute',
        bottom: 40,
        width: '80%',
        height: 50,
        backgroundColor: '#f44336',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default VideoCallScreen;
