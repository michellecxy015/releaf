import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const onboardingData = [
  {
    title: 'Trustworthy Plant and Reward',
    description: 'Promote eco-friendly behavior and get rewarded.',
    image: require('./assets/trustworthy.png'),
  },
  {
    title: 'Eco-Friendly Purchases',
    description: 'Track your expenses and green actions seamlessly.',
    image: require('./assets/eco_purchases.png'),
  },
  {
    title: 'Get Rewards',
    description: 'Redeem points for rewards, virtual trees, or cash!',
    image: require('./assets/rewards.png'),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('LinkTwint');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={onboardingData[currentIndex].image} style={styles.image} />
      <Text style={styles.title}>{onboardingData[currentIndex].title}</Text>
      <Text style={styles.description}>{onboardingData[currentIndex].description}</Text>
      <View style={styles.dots}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 300, height: 300, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { textAlign: 'center', color: 'gray', marginBottom: 30 },
  dots: { flexDirection: 'row', marginBottom: 20 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#ccc', marginHorizontal: 5 },
  activeDot: { backgroundColor: 'blue' },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16 },
});

export default OnboardingScreen;
