import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react';
import { styles } from './styles'
import { useRadioButtonStore } from '../../store/store';
import { CheckBox } from '@rneui/themed';

const RadioGroup = ({}) => {

  const selectedTimeOfDay = useRadioButtonStore((state) => state.selectedTimeOfDay);
  const setSelectedTimeOfDay = useRadioButtonStore((state) => state.setSelectedTimeOfDay);
  const [checked, setChecked] = useState(false);
  const radioButtonsData = [{
    id: '1',
    label: 'Morning',
    value: 'Morning',
  },
    {
      id: '2',
      label: 'Afternoon',
      value: 'Afternoon',
    },
    {
      id: '3',
      label: 'Evening',
      value: 'Evening',

    }
  ]
 
  return (
    <View style={styles.container}>
      {radioButtonsData.map((item) => (
        <Pressable
          onPress={() => {
            setSelectedTimeOfDay(item.value)
            setChecked(!checked)
          }}
          key={item.id} style={styles.radioButtonContainer}>
          <CheckBox
           checked={selectedTimeOfDay === item.value}
            checkedIcon="dot-circle-o"
            uncheckedIcon='circle-o'

            containerStyle={{backgroundColor: 'transparent', borderWidth: 0, padding: 0, margin: 0}}

         />
          <Text style={styles.text}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  )
}

export default RadioGroup