// src/components/mealCardStyles.ts
import { theme } from '@theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA',
    borderRadius: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  time: {
    fontSize: 14,
    color: '#333',
    width: 48,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  divider: {
    width: 1,
    height: 14,
    backgroundColor: '#C4C4CC',
    marginHorizontal: 12,
  },
  title: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  statusIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
})
