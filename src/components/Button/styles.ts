import { theme } from '@theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 6,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: theme.COLORS.GRAY_600,
  },
  title: {
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.WHITE,
  },
  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_700,
  },
  
  outlineText: {
    color: theme.COLORS.GRAY_700,
  },
  outlineTitle: {
    color: '#1C1C1C',
  },
  icon: {
    marginRight: 8,
  },
  outlineIcon: {
    color: '#1C1C1C',
  }
});
