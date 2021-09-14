import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Subtitle from '../../../component/basic/SubTitle';
import Background from './../../../component/basic/Background';
import H3 from './../../../component/basic/H3';

import P from './../../../component/basic/P';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../../theme/theme';

const data1 = [
  {
    id: 1,
    Category: 'Graphics & Design',
  },
  {
    id: 2,
    Category: 'Design',
  },
  {
    id: 3,
    Category: 'Marketing & Development',
  },
  {
    id: 123,
    Category: 'Test & Design',
  },
  {
    id: 2134,
    Category: 'Develop',
  },
  {
    id: 51,
    Category: 'Marketing ',
  },
];

const SearchListInfo = ({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme.colors.bg,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{paddingLeft: 25}}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
      ),
      headerTitle: () => <View />,
    });
  }, [navigation]);
  const {id, Title, sub, iconName} = route.params;

  return (
    <Background>
      <FlatList
        data={data1}
        ListHeaderComponent={() => (
          <View style={styles.Top}>
            <Icon name={iconName} size={38} />

            <Subtitle>{Title}</Subtitle>
            <P>{sub}</P>
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles.List}>
            <H3>{item.Category}</H3>
            <Icon name="chevron-forward" size={30} />
          </View>
        )}
      />
    </Background>
  );
};

export default SearchListInfo;

const styles = StyleSheet.create({
  Top: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 10,
    flex: 1,
  },
  seperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  List: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
