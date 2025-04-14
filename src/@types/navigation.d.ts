export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined

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
