export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      registeredMeal: {
        meal?: {
          name: string
          description: string
          date: string
          hour: string
          isInsideDiet: boolean
        }
      }
      mealForm: {
        meal?: {
          name: string
          description: string
          date: string
          hour: string
          isInsideDiet: boolean
        }
      }
      mealDetails: {
        meal: {
          name: string
          description: string
          date: string
          hour: string
          isInsideDiet: boolean
        }
      }
    }
  }
}
