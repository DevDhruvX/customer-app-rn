import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
    Splash: undefined;
    Step02: undefined;
};

export default function SplashScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Step02');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    const handlePress = () => {
        navigation.navigate('Step02');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={1}>
            <Image
                source={require('../../assets/Step-01.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </TouchableOpacity>
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
});
