import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';
import {P} from '../../../component/basic';
import {theme} from '../../../theme/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {NavigationContainer} from '@react-navigation/native';
import {BankingWithdrawImage} from '../../../component/DrawerScreensComponent';

const Tab = createMaterialTopTabNavigator();

function Terms({navigation}) {
  return (
    <View style={styles.Main}>
      <View style={styles.content}>
        {/* <Title>Terms of Service</Title> */}
        <Paragraph>
          These Terms of Service (“Terms”) governs use of the Rondevoo platform
          offered by Rondevoo, LLC (“we”, “us”, or “Rondevoo”), including our
          website (rondevoo.tv) and services we provide through it
          (collectively, our “Platform”).
        </Paragraph>
        <Paragraph>
          Rondevoo offers live 1 on 1 video calls through our Platform (each, a
          “Call”) where users book or bid to speak with a wide array of talent.
          Those who offer the opportunity to communicate are called “Creators”
          and those who pay to communicate with Creators are called “Users”.
          Creators and Users may also be referred to as “you”, “your” or
          “Participants” throughout these Terms. These Terms apply to everyone
          who accesses and/or uses our Platform.
        </Paragraph>
        <Paragraph>
          PLEASE READ THESE TERMS CAREFULLY. By using our Platform or otherwise
          indicating your acceptance (for example, by agreeing when creating or
          logging into your account, clicking “I Agree,” etc.), you represent
          and warrant that you have read, understand, and agree to be bound by
          these Terms. If you do not agree, do not access or use our Platform.
        </Paragraph>
      </View>
    </View>
  );
}
function Privacy({navigation}) {
  return (
    <View style={styles.Main}>
      <View style={styles.content}>
        {/* <Title>Terms of Service</Title> */}
        <Paragraph>
          These Terms of Service (“Terms”) governs use of the Rondevoo platform
          offered by Rondevoo, LLC (“we”, “us”, or “Rondevoo”), including our
          website (rondevoo.tv) and services we provide through it
          (collectively, our “Platform”).
        </Paragraph>
        <Paragraph>
          Rondevoo offers live 1 on 1 video calls through our Platform (each, a
          “Call”) where users book or bid to speak with a wide array of talent.
          Those who offer the opportunity to communicate are called “Creators”
          and those who pay to communicate with Creators are called “Users”.
          Creators and Users may also be referred to as “you”, “your” or
          “Participants” throughout these Terms. These Terms apply to everyone
          who accesses and/or uses our Platform.
        </Paragraph>
        <Paragraph>
          PLEASE READ THESE TERMS CAREFULLY. By using our Platform or otherwise
          indicating your acceptance (for example, by agreeing when creating or
          logging into your account, clicking “I Agree,” etc.), you represent
          and warrant that you have read, understand, and agree to be bound by
          these Terms. If you do not agree, do not access or use our Platform.
        </Paragraph>
      </View>
    </View>
  );
}
const TermsOfService = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
          borderRadius: 10,
        },
      }}>
      <Tab.Screen name="Terms of Service" component={Terms} />
      <Tab.Screen name="Privacy Policy" component={Privacy} />
    </Tab.Navigator>
  );
};

export default TermsOfService;

const styles = StyleSheet.create({
  Main: {flex: 1},
  content: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
    ...theme.colors.customShad2,
  },
});
