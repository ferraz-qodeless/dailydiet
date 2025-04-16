import { theme } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 18,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B1D1E',
    marginBottom: 8,
    marginTop: 24,
  },
  description: {
    fontSize: 16,
    color: '#333638',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1B1D1E',
    marginTop: 24,
  },
  datetime: {
    fontSize: 14,
    color: '#333638',
    marginBottom: 24,
  },
  dietStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
    width: '40%',
    backgroundColor: '#EFF0F0',
    
  },
  dietStatusText: {
    fontSize: 14,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  spacer: {
    flex: 1,
  },
  footer: {
    gap: 8,
    paddingBottom: 24,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 7,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 24,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },
})
