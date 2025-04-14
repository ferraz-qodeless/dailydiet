import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  percentageText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1B1D1E',
  },
  description: {
    fontSize: 14,
    color: '#333638',
    marginTop: 8,
  },
  panel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1B1D1E',
    marginBottom: 24,
    textAlign: 'center',
  },
  cardGroup: {
    gap: 12,
  },
  card: {
    backgroundColor: '#EFF0F0',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B1D1E',
  },
  cardText: {
    fontSize: 14,
    color: '#333638',
    textAlign: 'center',
    marginTop: 4,
  },
});
