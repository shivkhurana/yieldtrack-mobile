import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import TransactionCard from "../components/TransactionCard";

export default function HomeScreen() {
  const { userSession } = useAuth(); // Pulling data without prop-drilling
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mocking an API fetch for user transactions
    setTimeout(() => {
      setTransactions([
        { id: "1", merchant: "Amazon", amount: 45.99, date: "2026-04-10" },
        { id: "2", merchant: "Starbucks", amount: 5.5, date: "2026-04-09" },
        { id: "3", merchant: "Uber", amount: 22.4, date: "2026-04-08" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Welcome back, {userSession?.name || "User"}
      </Text>
      <Text style={styles.subHeader}>Recent Transactions</Text>

      {/* FlatList is highly optimized for rendering long lists of data on mobile */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionCard
            merchant={item.merchant}
            amount={item.amount}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa", paddingHorizontal: 20 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 24, fontWeight: "bold", marginTop: 20, color: "#333" },
  subHeader: { fontSize: 18, color: "#666", marginVertical: 15 },
});
