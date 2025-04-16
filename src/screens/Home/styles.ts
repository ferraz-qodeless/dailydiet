import { theme } from '@theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.COLORS.GRAY_100,
  },
  dietResult: {
    width: '100%',
    height: 100,
    marginTop: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GREEN_LIGHT,
    borderRadius: 8,
    position: 'relative',
  },
  dietResultIconWrapper: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  dietResultPercent: {
    fontSize: theme.FONT_SIZE.XXL,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.GRAY_700,
  },
  dietResultText: {
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.GRAY_700,
  },
  meals: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 32,
    marginBottom: 16,
    gap: 8,
  },
  mealTitle: {
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.GRAY_700,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
