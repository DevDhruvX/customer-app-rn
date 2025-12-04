import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

const Step03Screen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Step-03.png')}
                style={styles.image}
                resizeMode="cover"
            />
            {/* Clickable areas for buttons */}
            <TouchableOpacity
                style={styles.topRightButton}
                onPress={() => navigation.navigate('Step04')}
                activeOpacity={0.7}
            />
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
    topRightButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 100,
        height: 50,
        backgroundColor: 'transparent',
    },
});

export default Step03Screen;
