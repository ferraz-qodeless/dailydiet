import { SectionList, Text, View } from 'react-native';
import { styles } from './styles';

type Meal = {
  hour: string;
  title: string;
  isInsideDiet: boolean;
};

type Section = {
  title: string; // a data
  data: Meal[];
};

type Props = {
  sections: Section[];
};

export function MealSectionList({ sections }: Props) {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.title + index}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.time}>{item.hour}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <View
            style={[
              styles.statusIndicator,
              { backgroundColor: item.isInsideDiet ? '#CBE4B4' : '#F3BABD' },
            ]}
          />
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
    />
  );
}
