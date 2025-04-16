import { Meal } from 'src/@types/meal';
import { MealSectionListItem } from 'src/@types/sections';

export function groupMealsByDate(meals: Meal[]): { title: string; data: MealSectionListItem[] }[] {
  const grouped: { title: string; data: MealSectionListItem[] }[] = [];

  meals.forEach(meal => {
    const formattedMeal: MealSectionListItem = {
      id: meal.id!,
      hour: meal.hour,
      title: meal.title,
      isInsideDiet: meal.isInsideDiet,
      description: meal.description!,
      date: meal.date!,
    };

    const existingGroup = grouped.find(group => group.title === meal.date);
    if (existingGroup) {
      existingGroup.data.push(formattedMeal);
    } else {
      grouped.push({ title: meal.date, data: [formattedMeal] });
    }
  });

  return grouped;
}
