import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { StatusBar } from "expo-status-bar";
import { colors } from "../theme";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/backButton";
import ExpenseCard from "../components/ExpenseCard";

const item = [
  {
    id: 1,
    title: 'Pizza',
    amount: 4500,
    category: "food",
  },
  {
    id: 2,
    title: 'Bought a Jacket',
    amount: 40000,
    category: "shopping",
  },
  {
    id: 3,
    title: 'Went to the Movies',
    amount: 5600,
    category: "entertainemt",
  },
];

export default function TripExpensesScreen(props) {
    //console.log('Prop: ', props)
    const {id, place, country} = props.route.params
  const navigation = useNavigation();

  return (
    <ScreenWrapper className="flex-1">
      <StatusBar/>
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-0 left-0 z-10">
            <BackButton />
          </View>
          <View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>{place}</Text>
            <Text className={`${colors.heading} text-xs text-center`}>{country}</Text>
          </View>
        </View>

        {/* Hero Image */}
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require("../assets/images/7.png")}
            className="w-80 h-80"
          />
        </View>

        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddExpense")}
              className="p-2 px-3 bg-white border-gray border-200 rounded-full"
            >
              <Text className={`${colors.heading}`}>Add Expense</Text>
            </TouchableOpacity>
          </View>

          {/* Boxes for the Trips */}
          <View style={{ height: 430 }}>
            <FlatList
              data={item}
              ListEmptyComponent={
                <EmptyList message={"You have not recorded any expenses yet"} />
              }
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              renderItem={({ item }) => {
                return (
                  <ExpenseCard item={item}/>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
