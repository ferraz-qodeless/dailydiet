// src/routes/index.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MealDetails } from '@screens/MealDetails'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="mealDetails" component={MealDetails} />
    </Navigator>
  )
}
