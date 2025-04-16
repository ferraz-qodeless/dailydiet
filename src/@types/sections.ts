export type MealSectionListItem = {
  id: string;
  hour: string;
  title: string;
  isInsideDiet: boolean;
  description: string;
  date: string;
}

export type MealSection = {
  title: string;
  data: MealSectionListItem[];
}