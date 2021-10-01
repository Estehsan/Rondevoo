import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import PhoneSvg from './../../component/svg/PhoneSvg';

import SearchBar from '../../component/HomeComponent/SearchBar';
import SearchList from '../../component/SearchComponent/SearchList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import H1 from '../../component/basic/H1';
import H2W from '../../component/basic/H2W';
import BottomBtnCall from '../../component/basic/BottomBtnCall';

import P from '../../component/basic/P';

import {theme} from '../../theme/theme';
import PeopleIcon from '../../component/SearchComponent/PeopleIcon';
import {ScrollView} from 'react-native-gesture-handler';

import FeedPost from '../../component/HomeComponent/FeedPost';
import FeedData from '../../theme/FeedData';
import CategoriesData from '../../theme/CategoriesData';
import {Title} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

const feature = [
  {
    id: 1,
    img: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    title: 'Apha',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',

    title: 'Beta',
  },
  {
    id: 3,
    img: 'https://thumbs.dreamstime.com/b/close-up-portrait-nice-person-bristle-show-finger-okey-sign-isolated-pink-color-background-203466939.jpg',

    title: 'Gama',
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU',
    title: 'John',
  },
  {
    id: 5,
    img: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    title: 'Wow',
  },
];

function BlueBar(props) {
  return (
    <View style={[styles.blueBar, {backgroundColor: props.item.color}]}>
      <MaterialIcons
        name={props.item.icon}
        size={25}
        color={props.item.TextColor}
      />
      <P style={[{color: props.item.TextColor}]}>{props.item.category}</P>
    </View>
  );
}
function Feed({navigation}) {
  return (
    <View>
      <View style={styles.cant}>
        <PhoneSvg />
        <Title>We Can't Find Any Data</Title>
        <TouchableOpacity style={styles.btn}>
          <H2W>Search Now </H2W>
        </TouchableOpacity>
      </View>
    </View>

    // {/* <View style={styles.container}>
    //     <View>
    //       <View>
    //         <FlatList
    //           data={FeedData}
    //           keyExtractor={item => item.id}
    //           renderItem={({item}) => (
    //             <View style={styles.FeedPostStyle}>
    //               <FeedPost item={item} />
    //             </View>
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View> */}
  );
}

function People({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.p30}>
          <H1>Categories </H1>
        </View>
        <View style={styles.p30}></View>
        <View
          style={{width: Dimensions.get('window').width, marginVertical: 5}}>
          <FlatList
            data={CategoriesData}
            showsHorizontalScrollIndicator="false"
            horizontal
            renderItem={({item}) => <BlueBar item={item} />}
          />
        </View>
        <View style={styles.three}>
          <H1>Featured </H1>
        </View>

        <FlatList
          data={feature}
          showsHorizontalScrollIndicator="false"
          horizontal
          renderItem={({item}) => <PeopleIcon item={item} />}
        />

        <View style={styles.three}>
          <H1>Athlete </H1>
        </View>
        <FlatList
          data={feature}
          showsHorizontalScrollIndicator="false"
          horizontal
          renderItem={({item}) => <PeopleIcon item={item} />}
        />
        <View style={styles.three}>
          <H1>Celebrity </H1>
        </View>
        <FlatList
          data={feature}
          showsHorizontalScrollIndicator="false"
          horizontal
          renderItem={({item}) => <PeopleIcon item={item} />}
        />

        {/* <FlatList
        data={data1}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SearchList item={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      /> */}
      </ScrollView>
    </View>
  );
}
function Calls({navigation}) {
  return (
    <View>
      <View style={styles.cant}>
        <PhoneSvg />
        <Title>We Can't Find Any Data</Title>
        <View style={styles.btn}>
          <H2W>Call Now</H2W>
        </View>
      </View>
    </View>
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   {/* <FlatList
    //     data={data1}
    //     keyExtractor={item => item.id}
    //     renderItem={({item}) => <SearchList item={item} />}
    //     ItemSeparatorComponent={() => <View style={styles.seperator} />}
    //   /> */}
    // </View>
  );
}

const Search = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerTitle: () => <SearchBar navigation={navigation} />,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.background}>
      {/* <SearchBar /> */}
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="People" component={People} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  background: {backgroundColor: 'white', flex: 1},
  container: {flex: 1},
  seperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  p30: {
    paddingHorizontal: 30,
  },
  blueBar: {
    marginVertical: 10,
    justifyContent: 'space-evenly',
    width: 110,

    alignItems: 'center',
    marginRight: 10,
    borderRadius: 20,
    height: 55,
    display: 'flex',
    flexDirection: 'row',
  },
  three: {
    paddingHorizontal: 30,
    marginVertical: 9,
  },
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
