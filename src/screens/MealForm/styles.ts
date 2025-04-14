import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDEDF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 64,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B1D1E',
  },

  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 36,
    paddingHorizontal: 24,
  },

  mainContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  label: {
    fontSize: 14,
    color: '#333638',
    marginBottom: 4,
    marginTop: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDDEDF',
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    color: '#1B1D1E',
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },

  half: {
    flex: 1,
  },

  tag: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDDEDF',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  selectedGreen: {
    backgroundColor: '#E5F0DB',
    borderColor: '#639339',
  },

  selectedRed: {
    backgroundColor: '#F4E6E7',
    borderColor: '#BF3B44',
  },

  tagText: {
    fontSize: 14,
    color: '#1B1D1E',
  },

  dot: {
    marginRight: 4,
  },

  buttonContainer: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
});
