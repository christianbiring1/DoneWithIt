import React from 'react';
import { useFormikContext } from 'formik';


import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {

  const {setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="lock"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
        // placeholder="Password"
        // secureTextEntry
        // textContentType="password"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

export default AppFormField;