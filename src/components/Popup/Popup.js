import { StyleSheet, Text, View, Modal } from 'react-native';
import React, { useState } from 'react';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";


const Popup = ({title}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        
      >
        <View>
          <Text>{title}</Text>

        </View>
      </Modal>
    </View>
  )
}

export default Popup

const styles = StyleSheet.create({})