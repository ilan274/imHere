import { FlatList, Text } from 'react-native'

import { IParticipant } from '../../screens/Home'
import { Participant } from '../Participant'
import { styles } from './styles'

type IProps = {
  handleRemoveParticipant: (participant: IParticipant) => void;
  participants: IParticipant[];
};

export const ParticipantsList = ({
  handleRemoveParticipant,
  participants,
}: IProps) => {
  return (
    <>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => {
              handleRemoveParticipant(item);
            }}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nobody arrived to the event yet? Add participants to your list to
            see them here.
          </Text>
        )}
      />
    </>
  );
};
