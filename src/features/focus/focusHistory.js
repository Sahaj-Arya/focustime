import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Things i focused on</Text>

        {!!focusHistory.length && (
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status === 1 ? 'green' : 'red',
    fontSize: 20,
  }),

  title: {
    color: 'white',
    fontSize: 20,
  },
});
