import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { colors } from "../../theme";
import BackButton from "../../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
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
      <StatusBar />
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Sign In
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-80 w-80"
              source={require("../../assets/images/login.png")}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(value) => setEmail(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Password
            </Text>
            <View className="p-4 bg-white rounded-full mb-3 flex flex-row justify-between items-center">
              <TextInput
                value={password}
                secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword
                onChangeText={(value) => setPassword(value)}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Icon
                  name={showPassword ? "eye" : "eye-slash"} // Toggle the eye icon based on showPassword
                  size={20}
                  color="#2a2a2a" // Adjust the color as needed
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="flex-row justify-end">
              <Text>Forgot Passowrd?</Text>
            </TouchableOpacity>

            <View>
              {loading ? (
                <ActivityIndicator size="large" color="#50C878" />
              ) : (
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{ backgroundColor: colors.button }}
                  className="my-6 rounded-full p-3 shadow-sm mx-2"
                >
                  <Text className="text-center text-white text-lg font-bold">
                    Login
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
