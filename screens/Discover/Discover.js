import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../../assets";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" flex-1 relative bg-white">
      <View className="p-3 flex gap-4">
        <View className="flex-row justify-between pt-2 items-center">
          <View className="flex gap-2">
            <Text className=" text-[30px] text-[#4dabb7] font-semibold">
              Discover
            </Text>
            <Text className=" text-[25px] text-[#2a2b4b]">
              The beauty today
            </Text>
          </View>
          <View>
            <Image
              source={Avatar}
              className="w-[45px] h-[45px] mr-2 object-cover"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
