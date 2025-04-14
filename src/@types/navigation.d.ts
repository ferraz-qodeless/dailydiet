export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
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
