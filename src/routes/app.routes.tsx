// src/routes/index.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { MealDetails } from '@screens/MealDetails';
import { MealForm } from '@screens/MealForm';
import { RegisteredMeal } from '@screens/RegisteredMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="mealForm" component={MealForm} />
      <Screen name="registeredMeal" component={RegisteredMeal} />
    </Navigator>
  )
}
