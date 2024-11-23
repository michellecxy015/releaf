import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', title: 'SBB Ticket', amount: '-$3', energy: '+30 energy' },
  { id: '2', title: 'PublicBike', amount: '-$1', energy: '+10 energy' },
  { id: '3', title: 'ZVV Pass', amount: '-$2', energy: '+20 energy' },
];

const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
            <Text style={styles.transactionEnergy}>{item.energy}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  transaction: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  transactionTitle: { fontSize: 18, fontWeight: 'bold' },
  transactionAmount: { color: 'red' },
  transactionEnergy: { color: 'green' },
});

export default TransactionsScreen;
