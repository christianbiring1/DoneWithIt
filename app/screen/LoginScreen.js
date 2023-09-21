import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
      style={styles.logo}
      source={require("../assets/favicon.png")} />
      <Formik
        initialValues={{ email: "", password: ""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) =>
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyBoardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppText>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <AppText>{errors.password}</AppText>
            <AppButton title="Login"  onPress={handleSubmit}/>
          </>
        }
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  }
})

export default LoginScreen;