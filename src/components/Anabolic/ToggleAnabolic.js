import {Text, Pressable, View, Animated, UIManager, LayoutAnimation, Platform} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

const ToggleAnabolic = ({title, description}) => {
  const [toggle, setToggle] = useState(false);

 if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


  const onToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setToggle(!toggle);
  };

  return (
      <Pressable onPress={onToggle} style={styles.toggle}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <FontAwesome
            name={toggle ? 'angle-down' : 'angle-right'}
            size={22}
            color="#00a6fb"
            style={styles.icon}
          />
        </View>
      <Animated.View style={{
        paddingTop: 15,
        
        overflow: 'hidden',
      }}>
          {toggle ? <Text style={styles.text}>{description}</Text> : null}
        </Animated.View>
      </Pressable>
   
  );
};

export default ToggleAnabolic;
