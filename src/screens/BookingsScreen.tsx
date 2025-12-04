import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

const BookingsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Bookings 1.0.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.videoCallButton}
                    onPress={() => navigation.navigate('VideoCallSetup')}
                >
                    <Text style={styles.buttonText}>Start Video Call</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Step03')}
                >
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: width,
        height: height,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        gap: 15,
    },
    videoCallButton: {
        backgroundColor: '#3A643B',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#3A643B',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default BookingsScreen;
