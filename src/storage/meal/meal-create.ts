import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storage-config';
import { Meal } from 'src/@types/meal';
import { mealGetAll } from './meal-get-all';

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();
    const updatedMeals = [...storedMeals, newMeal];
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
  }
}