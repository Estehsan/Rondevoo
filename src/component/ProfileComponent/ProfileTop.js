import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {theme} from '../../theme/theme';
import {H3} from '../basic';
import Subtitle from '../basic/SubTitle';

const ProfileTop = () => {
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
          <Subtitle>Name</Subtitle>
          <H3>title</H3>
        </View>
        <View style={styles.BioInfo}>
          <View style={styles.BioHere}>
            <View>
              <H3>
                Yes this is my Bio!I'm loving this design and Follow me now
              </H3>
            </View>

            <View style={styles.IconsList}>
              <Avatar.Icon
                style={styles.iconBorder}
                size={34}
                icon="facebook"
              />
              <Avatar.Icon
                style={styles.iconBorder}
                size={34}
                icon="instagram"
              />
              <Avatar.Icon style={styles.iconBorder} size={34} icon="twitter" />
              <Avatar.Icon style={styles.iconBorder} size={34} icon="youtube" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  Top: {
    backgroundColor: theme.colors.twhite,
    paddingVertical: 18,
    paddingHorizontal: 30,
    ...theme.colors.customShad2,
  },
  FourBlocks: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  ProfilePic: {
    width: '40%',
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
});
