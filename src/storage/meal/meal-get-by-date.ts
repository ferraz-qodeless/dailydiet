import { Meal } from 'src/@types/meal';
import { mealGetAll } from './meal-get-all';

export async function mealGetByDate(date: string): Promise<Meal[]> {
  try {
    const meals = await mealGetAll();
    return meals.filter(meal => meal.date === date);
  } catch (error) {
    throw error;
  }
}