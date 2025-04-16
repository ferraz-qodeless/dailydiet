import isInsideImg from '@assets/isInsideDiet.png';
import isNotInsideImg from '@assets/isNotInsideDiet.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type RouteParams = {
  meal: {
    name: string;
    description: string;
    date: string;
    hour: string;
    isInsideDiet: boolean;
  };
};
export function RegisteredMeal() {
  const navigation = useNavigation();
  const route = useRoute();
  function handleSubmit() {
    navigation.navigate('home');
  }
  const { meal } = route.params as RouteParams;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: meal.isInsideDiet ? '#639339' : '#BF3B44'}]}>
          {meal.isInsideDiet 
            ? 'Continue assim!' 
            : 'Que pena!'}
        </Text>
        <Text style={styles.subtitle}>
          {meal.isInsideDiet 
            ? 'Você continua dentro da dieta. Muito bem!' 
            : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
        </Text>      
      </View>
      <Image
        source={meal.isInsideDiet ? isInsideImg : isNotInsideImg}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSubmit}>Ir para a página inicial</Text>
      </TouchableOpacity>
    </View>
  );
}