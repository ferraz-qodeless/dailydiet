import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

type Props = {
  isInsideDiet?: boolean
  isEditMode?: boolean
}

export function MealHeader({ isInsideDiet = true, isEditMode = false }: Props) {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const backgroundColor = isEditMode
    ? '#B9BBBC' // GRAY_400
    : isInsideDiet
    ? '#E5F0DB' // GREEN_MID
    : '#F4E6E7' // RED_MID

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          paddingTop: insets.top + 12,
          paddingHorizontal: 24, // se quiser deixar o botão alinhado
        }
      ]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#333638" />
      </TouchableOpacity>

      <Text style={styles.title}>Refeição</Text>

      <View style={{ width: 24 }} />
    </View>
  )
}
