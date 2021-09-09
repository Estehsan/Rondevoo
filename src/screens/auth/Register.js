import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInputComponent,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from './../../theme/theme';
import TInput from './../../component/basic/TInput';

import ImgBackground from '../../component/basic/ImgBackground';
import H1 from '../../component/basic/H1';
import H2W from '../../component/basic/H2W';

import Btn from '../../component/basic/Btn';
import Background from '../../component/basic/Background';
import Logo from '../../component/basic/Logo';

const Register = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPress = () => {
    const EmailError = email.value ? '' : "Email Can't be empty";
    if (EmailError) {
      setEmail({...email, error: EmailError});
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.Top}>
            <Logo />
            <View style={styles.P10}></View>
            <H1>Register Now</H1>
            <View style={styles.P5}></View>
          </View>

          <TInput
            placeholder="Name"
            label="Name"
            error={name.error}
            errorText={name.error}
            onChangeText={e => {
              setName({value: e, error: ''});
            }}
            value={name.value}
          />
          <TInput
            placeholder="Email"
            label="Email"
            error={email.error}
            errorText={email.error}
            onChangeText={e => {
              setEmail({value: e, error: ''});
            }}
            value={email.value}
          />
          <TInput
            placeholder="Password"
            label="Password"
            iconName="lock-open-outline"
            error={password.error}
            errorText={password.error}
            onChangeText={e => {
              setPassword({value: e, error: ''});
            }}
            value={password.value}
            secureTextEntry
          />
          <View style={styles.P10}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Btn>
                <H2W>Register</H2W>
              </Btn>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  main: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.combination,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    height: '70%',
    width: '100%',
  },
  Top: {alignItems: 'center'},
  P10: {paddingVertical: 20},
  P5: {paddingVertical: 10},
});
