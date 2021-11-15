import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FindSvg from '../../component/svg/FindSvg';
import {theme} from '../../theme/theme';
const BankingWithdrawImage = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={styles.Main}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator="false">
        <View style={styles.topContainer}>
          <FindSvg />
        </View>
        <View style={styles.Content}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BankingWithdrawImage;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: theme.colors.primary,
    flex: 1,
  },
  topContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 50,
    borderRadius: 10,
    ...theme.colors.customShad2,
  },
});
