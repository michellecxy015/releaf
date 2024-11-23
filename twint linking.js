import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LinkTwintScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Link TWINT Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PhoneVerification')}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const PhoneVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16 },
});

export { LinkTwintScreen, PhoneVerificationScreen };
