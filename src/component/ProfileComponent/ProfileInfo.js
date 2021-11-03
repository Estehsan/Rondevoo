import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {theme} from '../../theme/theme';
import {H2, H3} from '../basic';
import Subtitle from '../basic/SubTitle';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

const ProfileInfo = () => {
  return (
    <View style={styles.Top}>
      <View style={styles.FourBlocks}>
        <View style={styles.ProfilePic}>
          <Avatar.Image
            size={80}
            source={{
              uri: 'https://thumbs.dreamstime.com/b/portrait-smiling-young-man-color-background-smiling-young-man-color-background-169671840.jpg',
            }}
          />
        </View>
        <View style={styles.BioInfo}>
          <View style={styles.BioHere}>
            <View>
              <Subtitle>Page Name</Subtitle>
              <H3>
                Page Bio is here !! Yes this is my Bio!I'm loving this design
                and Follow me now
              </H3>
            </View>

            <View style={styles.IconsList}>
              <H3># Subscriber</H3>
              <H3># Online</H3>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.ExtraInfo}>
        <H2>New</H2>
        <H2>Top</H2>
        <H2>@username</H2>
      </View>
      <View style={styles.edit}>
        <H2>Today</H2>
        <Icon2 size={25} name="pencil-alt" />
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  Top: {
    backgroundColor: theme.colors.twhite,
    paddingVertical: 18,
    paddingHorizontal: 10,
    ...theme.colors.customShad2,
  },
  FourBlocks: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  ProfilePic: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BioInfo: {
    width: '60%',
    alignSelf: 'center',
  },
  iconBorder: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  IconsList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 10,
    marginTop: 30,
  },
  ExtraInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: 'black',
    paddingTop: 20,
    borderTopWidth: 0.5,
    marginTop: 10,
  },
  edit: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
});
