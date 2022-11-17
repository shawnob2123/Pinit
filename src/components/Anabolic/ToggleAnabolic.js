import { Text, Pressable, Animated, View } from 'react-native'
import React, {useState, useRef} from 'react';;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

const ToggleAnabolic = ({title, description}) => {

  const [toggle, setToggle] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const onToggle = () => { 
    setToggle(!toggle);
    Animated.timing(animatedValue, {
      toValue: toggle ? 0 : 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  }
  
  
  return (
    <Pressable
      onPress={onToggle}
      style={styles.toggle}>
      <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
        <FontAwesome name={toggle ? 'angle-down' : 'angle-right'} size={22} color="#00a6fb" style={styles.icon} />
        </View>
      <Animated.View style={{
        paddingTop: 15,
        overflow: 'hidden'
      }}>
        
        {toggle ? (
          <Text style={styles.text}>
            {description}
          </Text>
        ) : null}
          
      </Animated.View>
    </Pressable>
  )
}

export default ToggleAnabolic;

