import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  const handleAddParticipant = (name: string) => {
    if (participants.includes(name)) {
      return Alert.alert(
        'Participant Exists',
        "There's already a participant with this name.",
        [
          {
            text: 'Add anyway',
            onPress: () => {
              setParticipants((prevState) => [...prevState, name]);
            },
          },
        ]
      );
    }

    setParticipants((prevState) => [...prevState, name]);
    setParticipantName('');
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert('Remove', `Confirm removing participant: ${name}`, [
      {
        text: 'Yes',
        onPress: () => {
          setParticipants((prevState) => [
            ...prevState.filter((participant) => participant !== name),
          ]);
          Alert.alert('Deleted!');
        },
      },
      { text: 'No', style: 'cancel' },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName} key={1}>
        Event Name
      </Text>
      <Text style={styles.eventDate} key={2}>
        {new Date().toLocaleDateString('pt')}
      </Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Participant name'
          placeholderTextColor='#6B6B6B'
          value={participantName}
          style={styles.input}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleAddParticipant(participantName);
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
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
    </View>
  );
}
