import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type Variant = 'solid' | 'outline'

type Props = TouchableOpacityProps & {
  title: string
  variant?: Variant
  icon?: 'edit' | 'delete'
}

export function Button({ title, variant = 'solid', icon, ...rest }: Props) {
  const IconComponent = icon === 'edit'
    ? PencilSimpleLine
    : icon === 'delete'
    ? Trash
    : null

  return (
    <TouchableOpacity
      style={[styles.container, variant === 'outline' && styles.outlineContainer]}
      {...rest}
    >
      {IconComponent && (
        <IconComponent
          size={18}
          weight="regular"
          color={variant === 'outline' ? '#1C1C1C' : '#FFFFFF'}
          style={styles.icon}
        />
      )}
      <Text style={[styles.title, variant === 'outline' && styles.outlineTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
