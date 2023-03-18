import { Text } from 'react-native'

import { styles } from './styles'

export const Header = () => {
  return (
    <>
      <Text style={styles.eventName} key={1}>
        Who's coming to your event?
      </Text>
      <Text style={styles.eventDate} key={2}>
        {new Date().toLocaleDateString('pt')}
      </Text>
    </>
  );
};
