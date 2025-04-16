import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useState } from 'react'
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

type RouteParams = {
  meal: {
    name: string
    description: string
    date: string
    hour: string
    isInsideDiet: boolean
  }
}

export function MealDetails() {
  const insets = useSafeAreaInsets()
  const route = useRoute()
  const navigation = useNavigation()
  const { meal } = route.params as RouteParams
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const backgroundColor = meal.isInsideDiet ? '#E5F0DB' : '#F4E6E7'
  const iconColor = meal.isInsideDiet ? '#639339' : '#BF3B44'

  function handleConfirmDelete() {
    setShowDeleteModal(false)
    navigation.navigate('home')
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#333638" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refeição</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.main}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 24, flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{meal.name}</Text>
          <Text style={styles.description}>{meal.description}</Text>

          <Text style={styles.label}>Data e hora</Text>
          <Text style={styles.datetime}>
            {meal.date} às {meal.hour}
          </Text>

          <View style={styles.dietStatusContainer}>
            <View style={[styles.statusIndicator, { backgroundColor: iconColor }]} />
            <Text style={[styles.dietStatusText, { color: '#333638' }]}>
              {meal.isInsideDiet ? 'dentro da dieta' : 'fora da dieta'}
            </Text>
          </View>

          <View style={styles.spacer} />
        </ScrollView>

        <View style={styles.footer}>
          <Button
            title="Editar refeição"
            icon="edit"
            onPress={() => navigation.navigate('mealForm', { meal })}
          />
          <Button
            title="Excluir refeição"
            icon="delete"
            variant="outline"
            onPress={() => setShowDeleteModal(true)}
          />
        </View>
      </View>

      <Modal
        visible={showDeleteModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deseja realmente excluir o registro da refeição?</Text>
            <View style={styles.modalActions}>
              <View style={{ flex: 1 }}>
                <Button title="Cancelar" variant="outline" onPress={() => setShowDeleteModal(false)} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Sim, excluir" onPress={handleConfirmDelete} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
