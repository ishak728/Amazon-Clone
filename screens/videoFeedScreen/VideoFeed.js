import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const VideoFeed = () => {
  const [isModalVisible, setModalVisible] = useState(true);

   

  return (
     
      <Modal
      onBackdropPress={()=>{setModalVisible(false)}} 
      isVisible={isModalVisible}
      style={{justifyContent:"flex-end"}}
      >
        <View style={{alignItems:"center",justifyContent:"center",backgroundColor: 'white', padding: 22,minHeight: 250,}}>
          <Text>ishak </Text>
          <Text>ishak </Text>
          <Text>ishak </Text>
          <Text>ishak </Text>
          <Text>ishak </Text>
          <Text>ishak </Text>
          <Text>ishak </Text>
        </View>

      </Modal>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModal: {
    margin: 0,
    justifyContent:"flex-end",
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

 


export default VideoFeed