import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mealCreate } from '@storage/meal/meal-create';
import { mealUpdate } from '@storage/meal/meal-update';
import { ArrowLeft, Circle } from 'phosphor-react-native';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Meal } from 'src/@types/meal';
import { styles } from './styles';

type RouteParams = {
  meal?: Meal;
};

export function MealForm() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params as RouteParams || {};

  const isEditMode = !!meal;

  const [name, setName] = useState(meal?.title || '');
  const [description, setDescription] = useState(meal?.description || '');
  const [date, setDate] = useState(meal?.date || '');
  const [hour, setHour] = useState(meal?.hour || '');
  const [isInsideDiet, setIsInsideDiet] = useState<boolean | null>(meal?.isInsideDiet ?? null);

  async function handleSubmit() {
    const updatedMeal: Meal = {
      id: meal?.id || String(Date.now()),
      title: name,
      description,
      date,
      hour,
      isInsideDiet: isInsideDiet === null ? false : isInsideDiet,
    };

    if (isEditMode) {
      await mealUpdate(updatedMeal);
      navigation.navigate('home');
    } else {
      await mealCreate(updatedMeal);
      navigation.navigate('registeredMeal', { meal: updatedMeal });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#333638" />
        </TouchableOpacity>
        <Text style={styles.title}>{isEditMode ? 'Editar refeição' : 'Nova refeição'}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.main} contentContainerStyle={styles.mainContent}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite o nome da refeição"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={description}
          onChangeText={setDescription}
          placeholder="Descreva sua refeição"
          multiline
        />

        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder="dd/mm/aaaa"
            />
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>Hora</Text>
            <TextInput
              style={styles.input}
              value={hour}
              onChangeText={setHour}
              placeholder="hh:mm"
            />
          </View>
        </View>

        <Text style={styles.label}>Está dentro da dieta?</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.tag, isInsideDiet === true && styles.selectedGreen]}
            onPress={() => setIsInsideDiet(true)}
          >
            <Circle size={8} weight="fill" color="#639339" style={styles.dot} />
            <Text style={styles.tagText}>Sim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tag, isInsideDiet === false && styles.selectedRed]}
            onPress={() => setIsInsideDiet(false)}
          >
            <Circle size={8} weight="fill" color="#BF3B44" style={styles.dot} />
            <Text style={styles.tagText}>Não</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title={isEditMode ? 'Salvar alterações' : 'Cadastrar refeição'} onPress={handleSubmit} />
      </View>
    </View>
  );
}
