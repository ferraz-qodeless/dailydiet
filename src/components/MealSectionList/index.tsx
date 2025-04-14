// src/components/MealSectionList.tsx
import { Meal, MealCard } from '@components/MealCard'
import { SectionList, Text } from 'react-native'
import { styles } from './styles'

type Section = {
  title: string
  data: Meal[]
}

type Props = {
  sections: Section[]
}

export function MealSectionList({ sections }: Props) {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.title + index}
      renderItem={({ item }) => <MealCard meal={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
    />
  )
}
