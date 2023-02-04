import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <View style="">
        <Text>This is jsut the intro</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
