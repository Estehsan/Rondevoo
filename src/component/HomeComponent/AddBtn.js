import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {theme} from '../../theme/theme';
import Icon2 from 'react-native-vector-icons/AntDesign';

const AddBtn = () => {
  return (
    <View style={styles.AddBtn}>
      <TouchableOpacity
      //   onPress={() => navigation.navigate('Subscription')}
      >
        <Icon2 size={45} name="pluscircleo" color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  AddBtn: {
    height: 150,
    width: '30%',
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.colors.customShad,
  },
});
