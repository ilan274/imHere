import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import uuid from 'react-native-uuid'

import { Header } from '../../components/Header.tsx'
import { ParticipantsList } from '../../components/ParticipantsList'
import { styles } from './styles'

export interface IParticipant {
  name: string;
  id: string;
}

export default function Home() {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [participantName, setParticipantName] = useState('');

  const handleAddParticipant = (name: string) => {
    const participantExists = participants.some(
      (participant) => participant.name === name.trim()
    );

    if (participantExists) {
      return Alert.alert(
        'Participant Exists',
        "There's already a participant with this name.",
        [
          {
            text: 'Add anyway',
            style: 'default',
            onPress: () => {
              setParticipants((prevState) => [
                ...prevState,
                { name, id: uuid.v4() as string },
              ]);
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {
              setParticipantName('');
            },
          },
        ]
      );
    }

    setParticipants((prevState) => [
      ...prevState,
      { name, id: uuid.v4() as string },
    ]);
    setParticipantName('');
  };

  const handleRemoveParticipant = ({ name, id }: IParticipant) => {
    Alert.alert('Remove', `Confirm removing participant: ${name}`, [
      {
        text: 'Yes',
        onPress: () => {
          setParticipants((prevState) => [
            ...prevState.filter((participant) => participant.id !== id),
          ]);
        },
      },
      { text: 'No', style: 'cancel' },
    ]);
  };

  return (
    <View style={styles().container}>
      <Header />

      <View style={styles().form}>
        <TextInput
          placeholder='Participant name'
          placeholderTextColor='#6B6B6B'
          value={participantName}
          style={styles().input}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity
          style={styles(!participantName.trim().length).button}
          onPress={() => {
            handleAddParticipant(participantName);
          }}
          disabled={!participantName.trim().length}
        >
          <Text style={styles().buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ParticipantsList
        handleRemoveParticipant={handleRemoveParticipant}
        participants={participants}
      />
    </View>
  );
}
