import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getMealStatistics } from '@storage/meal/meal-statistics';
import { ArrowLeft } from 'phosphor-react-native';
import { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export function Statistics() {
  const navigation = useNavigation();
  const [stats, setStats] = useState({
    percentage: 0,
    totalMeals: 0,
    mealsInsideDiet: 0,
    mealsOutsideDiet: 0,
    bestSequence: 0
  });

  const isAboveHalf = stats.percentage >= 50;
  const backgroundColor = isAboveHalf ? '#E5F0DB' : '#F4E6E7';

  function handleGoBack() {
    navigation.goBack();
  }

  useFocusEffect(useCallback(() => {
    getMealStatistics().then(setStats);
  }, []));

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <View style={[styles.result, { paddingTop: 40 }]}>
          <TouchableOpacity onPress={handleGoBack} style={{ position: 'absolute', top: 16, left: 16 }}>
            <ArrowLeft size={24} />
          </TouchableOpacity>
          <Text style={styles.percentageText}>{stats.percentage.toFixed(2)}%</Text>
          <Text style={styles.description}>das refeições dentro da dieta</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.sectionTitle}>Estatísticas gerais</Text>

          <View style={styles.cardGroup}>
            <View style={styles.card}>
              <Text style={styles.cardNumber}>{stats.bestSequence}</Text>
              <Text style={styles.cardText}>melhor sequência de pratos dentro da dieta</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardNumber}>{stats.totalMeals}</Text>
              <Text style={styles.cardText}>refeições registradas</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 8 }}>
              <View style={[styles.card, { backgroundColor: '#E5F0DB', flex: 1 }]}>
                <Text style={[styles.cardNumber, { color: '#1B1D1E' }]}>{stats.mealsInsideDiet}</Text>
                <Text style={[styles.cardText, { color: '#1B1D1E' }]}>refeições dentro da dieta</Text>
              </View>

              <View style={[styles.card, { backgroundColor: '#F4E6E7', flex: 1 }]}>
                <Text style={[styles.cardNumber, { color: '#1B1D1E' }]}>{stats.mealsOutsideDiet}</Text>
                <Text style={[styles.cardText, { color: '#1B1D1E' }]}>refeições fora da dieta</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
