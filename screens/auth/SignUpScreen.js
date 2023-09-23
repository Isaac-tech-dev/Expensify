import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { colors } from "../../theme";
import BackButton from "../../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    setLoading(true);

    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log("Error:", err.message);
      }
      //Goodd to Go
      //navigation.goBack()
      //navigation.navigate("Home");
    } else {
      //show error
    }
    setTimeout(() => {
      // After the operation is complete, hide the ActivityIndicator
      setLoading(false);

      // You can also navigate to another screen or perform any other action here.
    }, 2000);
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Sign Up
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-80 w-80"
              source={require("../../assets/images/signup.png")}
            />
          </View>
          <ScrollView className="space-y-2 mx-1">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Full Namde
            </Text>
            <TextInput
              value="Isaac Ayeni"
              placeholder="Enter Full name"
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
            <TextInput
              placeholder="Enter Email Address"
              value={email}
              onChangeText={(value) => setEmail(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Password
            </Text>
            <TextInput
              placeholder="Enter Password"
              value={password}
              secureTextEntry
              onChangeText={(value) => setPassword(value)}
              className="p-4 bg-white rounded-full mb-3"
            />

            <View>
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{ backgroundColor: colors.button }}
                  className="my-6 rounded-full p-3 shadow-sm mx-2"
                >
                  <Text className="text-center text-white text-lg font-bold">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
}
