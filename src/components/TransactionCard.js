import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TransactionCard({ merchant, amount, date }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.merchantText}>{merchant}</Text>
        <Text style={styles.amountText}>-${amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Required for Android shadow
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  merchantText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2d3436",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e74c3c",
  },
  dateText: {
    fontSize: 12,
    color: "#95a5a6",
  },
});
