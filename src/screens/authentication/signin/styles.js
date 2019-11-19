import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: metrics.padding,
    backgroundColor: colors.light,
    flex: 1,
  },
  loginContainer: {
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: metrics.padding * 0.7,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
  },
  loginDescription: {
    marginVertical: metrics.margin * 0.3,
    textAlign: 'center',
    fontSize: 18,
    color: colors.dark,
    paddingHorizontal: metrics.padding * 4,
  },
  loginFormContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f3f3f3',
  },
  loginFormGroup: {
    padding: metrics.padding * 0.5,
  },
  loginForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  loginForgotText: {
    color: '#b3bac3',
  },
  loginTextInput: {
    fontSize: 16,
    color: '#b3bac3',
  },
  loginContainerButtonSumit: {
    marginVertical: metrics.margin * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: colors.default,
  },
  loginButtonSumit: {
    paddingVertical: metrics.padding,
  },
  loginTextButton: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
