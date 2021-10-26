import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Image,
  TouchableRipple,
  Switch,
  Badge,
  Subheading,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import {SettingsIcon} from './../../assets/icons';

export default function DrawerContent({navigation}) {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            size={80}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1195087399661056019/pYAaQSJS_400x400.jpg',
            }}
          />

          <Title style={styles.title}>Muhammad Estehsan</Title>
          <Caption style={styles.caption}>@Estehsan</Caption>
          <View style={styles.KarmaBar}>
            <View style={styles.leftKarma}>
              <Avatar.Image
                size={28}
                source={require('./../../assets/img/coin.png')}
              />

              <View style={styles.linners}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Starting At
                </Paragraph>
                <Caption style={styles.caption}>10$</Caption>
              </View>
            </View>
            <View style={{borderWidth: 0.5, borderColor: 'silver'}} />
            <View style={styles.RightReddit}>
              <Icon size={28} name="star" color="#f1c40f" />

              <View style={styles.linners}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Rating
                </Paragraph>
                <Caption style={styles.caption}>â­â­â­â­</Caption>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                54
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                199
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section>
          <TouchableRipple onPress={() => navigation.navigate('MyProfile')}>
            <View style={styles.preference}>
              <Feather
                size={30}
                name="user"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>My Profile</Subheading>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('MyCalls')}>
            <View style={styles.preference}>
              <Feather
                size={30}
                name="video"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>My Calls</Subheading>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('UpcomingCalls')}>
            <View style={styles.preference}>
              <Feather
                size={30}
                name="calendar"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>Upcoming Calls</Subheading>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Request')}>
            <View style={styles.preference}>
              <Feather
                size={30}
                name="inbox"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>Request</Subheading>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => navigation.navigate('NewBookingCall')}>
            <View style={styles.preference}>
              <FontAwesome
                size={30}
                name="calendar-plus-o"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>New Booking Call</Subheading>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => navigation.navigate('NewBiddingCall')}>
            <View style={styles.preference}>
              <Ionicons
                size={30}
                name="hammer-outline"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>New Bidding Call</Subheading>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Profile')}>
            <View style={styles.preference}>
              <Feather
                size={30}
                name="user"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>Profile</Subheading>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Setting')}>
            <View style={styles.preference}>
              <Feather
                size={30}
                name="settings"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>Setting</Subheading>
            </View>
          </TouchableRipple>
          {/* <TouchableRipple onPress={() => navigation.navigate('Support')}>
            <View style={styles.preference}>
              <Icon
                size={30}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>Support</Subheading>
            </View>
          </TouchableRipple> */}
          <TouchableRipple onPress={() => navigation.navigate('Register')}>
            <View style={styles.preference}>
              <Feather
                size={30}
                name="log-out"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Subheading>Log Out</Subheading>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  KarmaBar: {
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'silver',
    justifyContent: 'space-around',
  },
  leftKarma: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  RightReddit: {
    justifyContent: 'space-around',
    alignItems: 'center',

    flexDirection: 'row',
    display: 'flex',
  },
  linners: {flexDirection: 'column', paddingLeft: 10},
});
