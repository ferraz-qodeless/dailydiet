export type MealSectionListItem = {
  hour: string
  title: string
  isInsideDiet: boolean
}

export type MealSection = {
  title: string
  data: {
    hour: string
    title: string
    isInsideDiet: boolean
  }[]
}
