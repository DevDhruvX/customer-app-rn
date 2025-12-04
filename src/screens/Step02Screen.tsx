import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

export default function Step02Screen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Step-02.png')}
                style={styles.image}
                resizeMode="cover"
            />
            {/* Clickable area at bottom for navigation */}
            <TouchableOpacity
                style={styles.bottomButton}
                onPress={() => navigation.navigate('Step03')}
                activeOpacity={0.7}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBF2',
    },
    image: {
        width: width,
        height: height,
    },
    bottomButton: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        height: 60,
        backgroundColor: 'transparent',
    },
});
