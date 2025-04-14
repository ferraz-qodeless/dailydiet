import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

type RouteParams = {
  percentage: number;
};

export function Statistics() {
  const route = useRoute();
  const { percentage } = route.params as RouteParams;

  const isAboveHalf = percentage >= 50;
  const backgroundColor = isAboveHalf ? '#E5F0DB' : '#F4E6E7';

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>


        <View style={[styles.result, { paddingTop: 40 }]}>
        <TouchableOpacity onPress={handleGoBack} style={{ position: 'absolute', top: 16, left: 16 }}>
          <ArrowLeft size={24} />
        </TouchableOpacity>
          <Text style={styles.percentageText}>{percentage.toFixed(2)}%</Text>
          <Text style={styles.description}>das refeições dentro da dieta</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.sectionTitle}>Estatísticas gerais</Text>

          <View style={styles.cardGroup}>
            <View style={styles.card}>
              <Text style={styles.cardNumber}>22</Text>
              <Text style={styles.cardText}>melhor sequência de pratos dentro da dieta</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardNumber}>109</Text>
              <Text style={styles.cardText}>refeições registradas</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 8 }}>
              <View style={[styles.card, { backgroundColor: '#E5F0DB', flex: 1 }]}>
                <Text style={[styles.cardNumber, { color: '#1B1D1E' }]}>99</Text>
                <Text style={[styles.cardText, { color: '#1B1D1E' }]}>refeições dentro da dieta</Text>
              </View>

              <View style={[styles.card, { backgroundColor: '#F4E6E7', flex: 1 }]}>
                <Text style={[styles.cardNumber, { color: '#1B1D1E' }]}>10</Text>
                <Text style={[styles.cardText, { color: '#1B1D1E' }]}>refeições fora da dieta</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
