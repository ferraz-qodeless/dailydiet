import { theme } from '@theme/index';
import { Plus } from 'phosphor-react-native';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <Plus size={18} color={theme.COLORS.WHITE} weight="bold" style={{ marginRight: 8 }} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
