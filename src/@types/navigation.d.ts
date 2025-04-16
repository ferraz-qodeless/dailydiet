import { Meal } from 'src/@types/meal';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      registeredMeal: {
        meal?: Meal;
      };
      mealForm: {
        meal?: Meal;
      };
      mealDetails: {
        meal: Meal;
      };
    }
  }
}
