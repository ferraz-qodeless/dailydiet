import { Meal } from "src/@types/meal";

export function groupMealsByDate(meals: Meal[]) {
  const grouped: Record<string, Meal[]> = {};

  meals.forEach((meal) => {
    if (!grouped[meal.date]) {
      grouped[meal.date] = [];
    }
    grouped[meal.date].push(meal);
  });

  const sections = Object.keys(grouped)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    .map(date => ({
      title: date,
      data: grouped[date].sort((a, b) => a.hour.localeCompare(b.hour))
    }));

  return sections;
}
