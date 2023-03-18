import { StyleSheet } from 'react-native'

export const styles = (props?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e1e1e',
      padding: 24,
    },
    input: {
      flex: 1,
      backgroundColor: '#3d3d3d',
      borderRadius: 5,
      height: 56,
      padding: 16,
      fontSize: 16,
      color: '#FFF',
      marginRight: 7,
    },
    button: {
      opacity: props ? 0.3 : 1,
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 24,
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },
  });
