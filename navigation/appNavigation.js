import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignInScreen from '../screens/auth/SignInScreen';


const Stack = createNativeStackNavigator();



export default function AppNavigation() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
                <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignUp" component={SignUpScreen} />
                <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignIn" component={SignInScreen} />
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} />
                <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenseScreen} />
                <Stack.Screen options={{headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}