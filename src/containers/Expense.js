import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { get, isEmpty } from "lodash";
import { Footer, Header, Chart } from "../components";
import { getExpense } from "../appStore/action";

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonthIndex: 0,
    };
  }

  componentDidMount() {
    const { getExpense } = this.props;
    getExpense();
  }

  render() {
    const {
      cardBalance = 0,
      month = [],
      spending = [],
      graphLabels = [],
      graphDatasets = [],
      loading = false,
    } = this.props;
    const { selectedMonthIndex } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        {loading ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color="#4df1a1" />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            {/* balance Section */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                marginTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 10,
                    color: "#77869e",
                    letterSpacing: 0.07,
                  }}
                >
                  Card Balance
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#042c5c",
                    letterSpacing: 0.57,
                  }}
                >
                  $ {cardBalance}
                </Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#e2f2eb",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 16,
                      height: 16,
                      borderRadius: 4,
                    }}
                  >
                    <Text style={{ color: "#1bc773", fontSize: 14 }}>↑</Text>
                  </View>
                  <Text
                    style={{
                      color: "#1bc773",
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    $3,214
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 4,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#f6e6e7",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 16,
                      height: 16,
                      borderRadius: 4,
                    }}
                  >
                    <Text style={{ color: "#f24750", fontSize: 14 }}>↓</Text>
                  </View>
                  <Text
                    style={{
                      color: "#f24750",
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    $1,168
                  </Text>
                </View>
              </View>
            </View>
            {/* Date Section */}
            <View
              style={{ marginTop: 16, paddingLeft: 16, flexDirection: "row" }}
            >
              <View
                style={{
                  height: 20,
                  width: 70,
                  borderRadius: 12,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                }}
              >
                <Text
                  style={{
                    color: "#77869e",
                    fontSize: 10,
                    fontWeight: "bold",
                    letterSpacing: 0.07,
                  }}
                >
                  Monthly
                </Text>
                <Text
                  style={{
                    color: "#77869e",
                    fontSize: 14,
                    fontWeight: "bold",
                    marginLeft: 6,
                  }}
                >
                  ▾
                </Text>
              </View>
              <ScrollView
                style={{ marginLeft: 20 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {month.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.setState({ selectedMonthIndex: index })}
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 4,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 8,
                      backgroundColor:
                        index == selectedMonthIndex ? "#dfe7f5" : "#f8f9f9",
                    }}
                  >
                    <Text
                      style={{
                        color: "#77869e",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            {/* Chart Section */}
            <View style={{ marginTop: 16 }}>
              {!isEmpty(graphLabels) && !isEmpty(graphDatasets) && (
                <Chart
                  graphData={{
                    labels: graphLabels,
                    datasets: graphDatasets,
                  }}
                />
              )}
            </View>

            {/* Spending Breakdown */}
            <View style={{ paddingHorizontal: 16 }}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 18,
                  letterSpacing: 0.26,
                  fontWeight: "bold",
                }}
              >
                Spending Breakdown
              </Text>
              {spending.map((item, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    marginTop: 12,
                    borderRadius: 6,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 8,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        height: 28,
                        width: 28,
                        borderRadius: 4,
                        backgroundColor: "#ff7e87",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/cart.png")}
                        style={{
                          height: 12,
                          width: 12,
                          tintColor: "#ffffff",
                        }}
                      />
                    </View>
                    <View style={{ marginLeft: 8 }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          letterSpacing: 0.27,
                        }}
                      >
                        {Object.keys(item)[0]}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: "bold",
                          letterSpacing: 0.18,
                          color: "#77869e",
                        }}
                      >
                        {new Date(parseInt(item.date)).toDateString()}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ color: "#ee5a55" }}>- $279,90</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9f9",
  },
});

const formatGraphDataSets = (rawDatasets = []) => {
  return rawDatasets.map((item, index) => ({
    ...item,
    color: () => item.borderColor,
  }));
};

const mapStateToProps = ({ expenseState }) => ({
  loading: get(expenseState, "ld_expense", false),
  cardBalance: get(expenseState, "expense.cardBalance", 0),
  month: get(expenseState, "expense.month", []),
  spending: get(expenseState, "expense.spending", []),
  graphLabels: get(expenseState, "expense.data.labels", []),
  graphDatasets: formatGraphDataSets(
    get(expenseState, "expense.data.datasets", [])
  ),
});

const mapDispatchToProps = { getExpense };

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
