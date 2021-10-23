import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../theme/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import H2 from './../../../component/basic/H2';
import BottomBtnCall from '../../../component/basic/BottomBtnCall';
import {Title} from 'react-native-paper';
import H2W from '../../../component/basic/H2W';
import UpcomingSvg from '../../../component/svg/UpcomingSvg';
import FindSvg from '../../../component/svg/FindSvg';

const Tab = createMaterialTopTabNavigator();

const Calls = ({navigation}) => {
  return (
    <View>
      <View style={styles.cant}>
        <UpcomingSvg />
        <Title>We Can't Find Any Call</Title>
        <TouchableOpacity style={styles.btn}>
          <H2W>No Upcoming Calls</H2W>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Upcoming = ({navigation}) => {
  return (
    <View>
      <View style={styles.cant}>
        <FindSvg />
        <Title>We Can't Find Any Call</Title>
        <TouchableOpacity style={styles.btn}>
          <H2W>No Upcoming Calls</H2W>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const UpcomingCalls = ({navigation}) => {
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
      headerTitle: () => <H2>Upcoming Calls</H2>,
      headerRight: () => <View />,
    });
  }, [navigation]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Calls" component={Calls} />
      <Tab.Screen name="Upcoming Calls" component={Upcoming} />
    </Tab.Navigator>
  );
};
export default UpcomingCalls;

const styles = StyleSheet.create({
  cant: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  btn: {
    height: 50,
    width: '70%',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderRadius: 100,
  },
});
