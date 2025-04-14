import { useNavigation } from '@react-navigation/native'
import { theme } from '@theme/index'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { styles } from './styles'

export type Meal = {
  hour: string
  title: string
  isInsideDiet: boolean
}

type Props = TouchableOpacityProps & {
  meal: Meal
}

export function MealCard({ meal, ...rest }: Props) {
  const navigation = useNavigation()

  function handleOpenDetails() {
    navigation.navigate('mealDetails', {
      meal: {
        name: meal.title,
        description: 'Descrição temporária...',
        date: '12/08/2022',
        hour: meal.hour,
        isInsideDiet: meal.isInsideDiet,
      },
    })
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handleOpenDetails} {...rest}>
      <Text style={styles.time}>{meal.hour}</Text>
      <View style={styles.divider} />
      <Text style={styles.title}>{meal.title}</Text>
      <View
        style={[
          styles.statusIndicator,
          { backgroundColor: meal.isInsideDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID },
        ]}
      />
    </TouchableOpacity>
  )
}
