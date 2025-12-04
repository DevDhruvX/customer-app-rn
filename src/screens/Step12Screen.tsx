import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

const Step12Screen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Step-12.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => navigation.navigate('Step13')}
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
    navigationButton: {
        position: 'absolute',
        bottom: 60,
        left: 20,
        right: 20,
        height: 60,
        backgroundColor: 'transparent',
    },
});

export default Step12Screen;
