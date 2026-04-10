import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function LedgerScreen() {
  // Mock data representing a lending portfolio
  const portfolio = {
    totalActiveLoans: 4,
    totalInvested: 12500.0,
    expectedYield: 8.5,
    accruedInterest: 345.5,
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerCard}>
        <Text style={styles.label}>Total Invested</Text>
        <Text style={styles.balance}>
          ${portfolio.totalInvested.toLocaleString()}
        </Text>
        <View style={styles.metricsRow}>
          <View>
            <Text style={styles.metricLabel}>Expected Yield</Text>
            <Text style={styles.metricValue}>{portfolio.expectedYield}%</Text>
          </View>
          <View>
            <Text style={styles.metricLabel}>Accrued Interest</Text>
            <Text style={styles.metricValue}>
              +${portfolio.accruedInterest.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Active Ledgers ({portfolio.totalActiveLoans})
      </Text>
      {/* In a real app, this would be a FlatList. Using Views here for the static mock */}
      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>
          Detailed ledger data will appear here once the API is connected.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f8", padding: 20 },
  headerCard: {
    backgroundColor: "#0052cc",
    borderRadius: 16,
    padding: 24,
    marginTop: 10,
    shadowColor: "#0052cc",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  label: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  balance: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
  },
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.2)",
  },
  metricLabel: { color: "rgba(255,255,255,0.8)", fontSize: 12 },
  metricValue: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginTop: 30,
    marginBottom: 15,
  },
  emptyState: {
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e1e4e8",
    borderStyle: "dashed",
  },
  emptyText: { color: "#95a5a6", textAlign: "center", lineHeight: 22 },
});
