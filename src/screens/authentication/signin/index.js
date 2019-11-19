import React, {Component} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../../../styles';
import styles from './styles';

export default class SigninScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Log In</Text>
          <Text style={styles.loginDescription}>
            Enter your login details to access your account
          </Text>
        </View>
        <View style={styles.loginFormContainer}>
          <View
            style={[
              styles.loginFormGroup,
              {borderBottomColor: '#f1f5fa', borderBottomWidth: 1},
            ]}>
            <TextInput
              style={styles.loginTextInput}
              placeholder="Your e-mail"
            />
          </View>
          <View style={[styles.loginFormGroup, styles.loginForgot]}>
            <TextInput
              style={[styles.loginTextInput, {flex: 1}]}
              placeholder="Your password"
            />
            <TouchableOpacity>
              <Text style={styles.loginForgotText}>FORGOT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginContainerButtonSumit}>
          <TouchableOpacity style={styles.loginButtonSumit}>
            <Text style={styles.loginTextButton}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
