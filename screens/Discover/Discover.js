import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" flex-1 relative">
      <View className="p-3 flex gap-4">
        <Text>Discover</Text>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
