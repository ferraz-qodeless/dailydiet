import { mealGetAll } from './meal-get-all';

export async function getMealStatistics() {
  const meals = await mealGetAll();

  const totalMeals = meals.length;
  const mealsInsideDiet = meals.filter(meal => meal.isInsideDiet).length;
  const mealsOutsideDiet = totalMeals - mealsInsideDiet;
  const percentage = totalMeals === 0 ? 0 : (mealsInsideDiet / totalMeals) * 100;

  let bestSequence = 0;
  let currentSequence = 0;
  meals
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.hour}`);
      const dateB = new Date(`${b.date} ${b.hour}`);
      return dateA.getTime() - dateB.getTime();
    })
    .forEach(meal => {
      if (meal.isInsideDiet) {
        currentSequence++;
        bestSequence = Math.max(bestSequence, currentSequence);
      } else {
        currentSequence = 0;
      }
    });

  return {
    totalMeals,
    mealsInsideDiet,
    mealsOutsideDiet,
    percentage,
    bestSequence,
  };
}
