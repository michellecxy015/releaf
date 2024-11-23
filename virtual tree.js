import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const VirtualTreeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/tree.png')} style={styles.treeImage} />
      <Text style={styles.progress}>Progress: 50%</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Leaderboard')}
      >
        <Text style={styles.buttonText}>View Leaderboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  treeImage: { width: 300, height: 300, marginBottom: 20 },
  progress: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16 },
});

export default VirtualTreeScreen;
