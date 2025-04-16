import { theme } from '@theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE.XL,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  subtitle: {
    fontSize: 16,
    color: '#333638',
    marginTop: 8,
  },
  image: {
    justifyContent: 'center',
    width: 224,
    height: 288,
    marginVertical: 32,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 6,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: theme.COLORS.GRAY_600,
  },
  buttonText: {
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.WHITE,
  },
});