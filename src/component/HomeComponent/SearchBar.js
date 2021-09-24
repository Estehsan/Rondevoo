import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Avatar, Searchbar} from 'react-native-paper';
import {theme} from './../../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TI from '../basic/TI';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';

const SearchBar = ({navigation, children}) => {
  // const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <TouchableOpacity onPress={navigation.openDrawer}>
          <Avatar.Image
            size={30}
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TI />
      </View>
      <View style={styles.right}>
        <View style={styles.left}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={navigation.openDrawer}>
              <Icon size={22} name="coins" color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    display: 'flex',
  },
  left: {justifyContent: 'center'},
  center: {
    width: '91%',
    marginHorizontal: 40,

    ...theme.colors.customShad,
  },
  right: {justifyContent: 'center'},
  // searchBar: {height: 30},
});
