import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export const Chart = ({ graphData = {} }) => {
  return (
    <View>
      <LineChart
        data={graphData}
        width={Dimensions.get("window").width}
        height={300}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        withDots={true}
        withShadow={true}
        withInnerLines={true}
        withOuterLines={false}
        fromZero={true}
        yAxisInterval={"100"}
        segments={3}
        getDotProps={(value, index) => {
          const { datasets = [] } = graphData;
          let dotColor = "";
          for (const set of datasets) {
            const { data, color } = set;
            if (data.includes(value)) {
              dotColor = color();
              break;
            }
          }
          return {
            r: "4",
            strokeWidth: "3",
            stroke: dotColor,
            fill: "#ffffff",
          };
        }}
        chartConfig={{
          backgroundGradientFrom: "#f8f9f9",
          backgroundGradientTo: "#f8f9f9",
          useShadowColorFromDataset: true,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {},
          propsForBackgroundLines: {
            stroke: "#77869e",
            strokeOpacity: 0.5,
          },
          propsForLabels: {
            fill: "#77869e",
            fontSize: 10,
          },
        }}
        bezier
        style={{}}
      />
    </View>
  );
};
