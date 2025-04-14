import { Text, TouchableOpacity, View } from 'react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { MealSectionList } from '@components/MealSectionList';
import { StatusBar } from 'expo-status-bar';

import { ArrowUpRight } from 'phosphor-react-native';

import { theme } from '@theme/index';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';



export function Home() {
  const navigation = useNavigation();

  function handleStatisticsNavigation() {
    navigation.navigate('statistics', { percentage: 49});
  }
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.dietResult} onPress={handleStatisticsNavigation}>
        <View style={styles.dietResultIconWrapper}>
          <ArrowUpRight size={24} weight="bold" color={theme.COLORS.GREEN_DARK} />
        </View>
        <Text style={styles.dietResultPercent}>90,86%</Text>
        <Text style={styles.dietResultText}>das refeições dentro da dieta</Text>
      </TouchableOpacity>

      <View style={styles.meals}>
        <Text style={styles.mealTitle}>Refeições</Text>
        <Button title="Nova refeição" onPress={() => navigation.navigate('mealForm')} />
      </View>

      <MealSectionList sections={meals} />

      <StatusBar style="auto" />
    </View>
  );
}

const meals = [
  {
    title: '12.08.22',
    data: [
      { hour: '20:00', title: 'X-tudo', isInsideDiet: false },
      { hour: '16:00', title: 'Whey protein com leite', isInsideDiet: true },
      { hour: '12:30', title: 'Salada cesar com frango grelhado', isInsideDiet: true },
      { hour: '09:30', title: 'Vitamina de banana com aveia', isInsideDiet: true },
    ],
  },
  {
    title: '11.08.22',
    data: [
      { hour: '20:00', title: 'X-tudo', isInsideDiet: false },
      { hour: '16:00', title: 'Whey protein com leite', isInsideDiet: true },
    ],
  },
];