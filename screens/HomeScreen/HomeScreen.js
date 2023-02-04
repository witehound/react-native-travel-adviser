import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" flex-1 relative">
      <View className="p-3 flex gap-4">
        <View className=" flex-row  flex items-center ">
          <View className=" rounded-full h-[70px] w-[70px] bg-black flex justify-center items-center">
            <Text className=" text-[30px] text-[#4dabb7] font-semibold">
              Go
            </Text>
          </View>
          <Text className=" text-[30px] m-4 font-semibold text-[#2a2b4b]">
            Travel
          </Text>
        </View>
        <View className="p-1 gap-2">
          <Text className="text-[40px] text-[#2a2b4b]">
            Enjoy the trip with
          </Text>
          <Text className="text-[35px] font-semibold text-[#4dabb7]">
            Good moments
          </Text>
          <Text className=" text-sm text-[#2a2b4b]">
            Best experience, making memories with the ones you love for the best
            price{" "}
          </Text>
        </View>
      </View>
      <View className=" absolute w-[350px] h-[350px] rounded-full bottom-36 -right-36 bg-[#00bcc9]" />
      <View className=" absolute w-[350px] h-[350px] rounded-full -bottom-28 -left-36 bg-[#e99265]" />
      <View className=" relative flex-1 flex items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-out"
          source={HeroImage}
          className=" w-full h-full object-cover -bottom-10 "
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className=" h-[90px] w-[90px] rounded-full absolute bottom-10 border-solid border-l-2  border-r-2  border-t-2 border-[#00bcc9] flex items-center justify-center"
        >
          <View className=" h-[80px] w-[80px] rounded-full bg-[#00bcc9] flex items-center justify-center ">
            <Text className="text-white text-[30px]">Go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
