import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { MealSectionList } from '@components/MealSectionList';
import { StatusBar } from 'expo-status-bar';

import { ArrowUpRight } from 'phosphor-react-native';

import { theme } from '@theme/index';
import { styles } from './styles';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { mealGetAll } from '@storage/meal/meal-get-all';
import { getMealStatistics } from '@storage/meal/meal-statistics';
import { groupMealsByDate } from '@utils/group-meals-by-date';
import { MealSection } from '../../@types/sections';

export function Home() {
  const [sections, setSections] = useState<MealSection[]>([]);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleStatisticsNavigation() {
    navigation.navigate('statistics');
  }

  async function fetchMeals() {
    setLoading(true);
    try {
      const storedMeals = await mealGetAll();
      const grouped = groupMealsByDate(storedMeals);
      setSections(grouped);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMealStatistics().then(stats => {
        setPercentage(stats.percentage);
      });
    }, [])
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchMeals);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header />

      <TouchableOpacity
        style={[
          styles.dietResult,
          { backgroundColor: percentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT },
        ]}
        onPress={handleStatisticsNavigation}
      >
        <View style={styles.dietResultIconWrapper}>
          <ArrowUpRight
            size={24}
            weight="bold"
            color={percentage >= 50 ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK}
          />
        </View>
        <Text style={styles.dietResultPercent}>{percentage.toFixed(2)}%</Text>
        <Text style={styles.dietResultText}>das refeições dentro da dieta</Text>
      </TouchableOpacity>

      <View style={styles.meals}>
        <Text style={styles.mealTitle}>Refeições</Text>
        <Button title="Nova refeição" onPress={() => navigation.navigate('mealForm', { meal: undefined })} />
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.COLORS.GREEN_DARK} />
        </View>
      ) : (
        <MealSectionList sections={sections} />
      )}

      <StatusBar style="auto" />
    </View>
  );
}
