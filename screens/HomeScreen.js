import { View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { StatusBar } from "expo-status-bar";
import { colors } from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const item =[
    {
        id: 1,
        place: "Ikeja City Mall",
        country: "Nigeria"
    },
    {
        id: 2,
        place: "Maryland Mall",
        country: "Nigeria"
    },
    {
        id: 3,
        place: "Chicken Republic",
        country: "Nigeria"
    },
    {
        id: 4,
        place: "Eko Conservation ",
        country: "Nigeria"
    }
]

export default function HomeScreen() {
    const navigation = useNavigation();

    const handleLogout = async ()=> {
        await signOut(auth)
    }

  return (
    <ScreenWrapper className="flex-1">
    <StatusBar/>
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>Expensify</Text>
        <TouchableOpacity onPress={handleLogout} className="p-2 px-3 bg-white border-gray border-200 rounded-full">
            <Text className={`${colors.heading}`}>Logout</Text>
        </TouchableOpacity>
      </View>

        {/* Hero Image */}
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image source={require('../assets/images/banner.png')} className="w-60 h-60"/>
      </View>

      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AddTrip")} className="p-2 px-3 bg-white border-gray border-200 rounded-full">
                <Text className={`${colors.heading}`}>Add Trip</Text>
            </TouchableOpacity>
        </View>

        {/* Boxes for the Trips */}
        <View style={{height: 430}}>
            <FlatList
                data={item}
                numColumns={2}
                ListEmptyComponent={<EmptyList message={"You have not recorded any trips yet"}/>}
                keyExtractor={item=> item.id}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                className="mx-1"
                renderItem={({item})=> {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("TripExpenses", {...item})} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                            <View>
                                <Image source={randomImage()} className="w-32 h-32 mb-2"/>
                                <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                                <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
      </View>
    </ScreenWrapper>
  )
}