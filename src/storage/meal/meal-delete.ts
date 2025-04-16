import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storage-config';
import { mealGetAll } from './meal-get-all';

export async function mealDelete(mealId: string) {
  try {
    const storedMeals = await mealGetAll();
    if (!storedMeals || storedMeals.length === 0) {
      console.log('Nenhuma refeição encontrada para excluir.');
      return;
    }
    
    const filteredMeals = storedMeals.filter(meal => meal.id !== mealId);
    if (filteredMeals.length === storedMeals.length) {
      console.log('Refeição não encontrada para excluir.');
      return;
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals));
    console.log('Refeição excluída com sucesso.');
  } catch (error) {
    console.error('Erro ao excluir refeição:', error);
    throw error;
  }
}
