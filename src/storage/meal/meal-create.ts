import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storage-config';
import { Meal } from 'src/@types/meal';
import { mealGetAll } from './meal-get-all';

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();
    console.log('Refeições salvas antes de adicionar a nova refeição:', storedMeals);

    const updatedMeals = [...storedMeals, newMeal];
    console.log('Refeições após adicionar a nova refeição:', updatedMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    console.error('Erro ao salvar a refeição:', error);
  }
}