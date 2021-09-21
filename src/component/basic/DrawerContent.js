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
  TouchableRipple,
  Switch,
  Badge,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
              <Icon size={28} name="coins" color="blue" />
              <View style={styles.linners}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Starting At
                </Paragraph>
                <Caption style={styles.caption}>10$</Caption>
              </View>
            </View>
            <View style={{borderWidth: 0.5, borderColor: 'silver'}} />
            <View style={styles.RightReddit}>
              <Icon size={28} name="coins" color="blue" />

              <View style={styles.linners}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Rating
                </Paragraph>
                <Caption style={styles.caption}>****</Caption>
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
          <TouchableRipple onPress={() => navigation.navigate('MyCalls')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>My Calls</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('UpcomingCalls')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>Upcoming Calls</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Request')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>Request</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => navigation.navigate('NewBookingCall')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>New Booking Call</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => navigation.navigate('NewBiddingCall')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>New Bidding Call</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Profile')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>Profile</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Setting')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>Setting</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate('Support')}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Icon
                size={22}
                name="coins"
                color="black"
                style={{paddingHorizontal: 15}}
              />
              <Text>Log Out</Text>
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
