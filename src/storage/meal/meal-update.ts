import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storage-config';
import { Meal } from 'src/@types/meal';
import { mealGetAll } from './meal-get-all';

export async function mealUpdate(updatedMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();
    const updatedMeals = storedMeals.map(meal =>
      meal.id === updatedMeal.id ? updatedMeal : meal
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));

    return updatedMeals;
  } catch (error) {
    throw error;
  }
}
