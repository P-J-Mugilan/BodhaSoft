

import React , {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';



function MyForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    setSubmittedData(data);
  };

  return (
    <SafeAreaView>
    <View style={ContentCenter}>
    
      {/* Add form header here */}
      <View style={FormHeader}>
        <Text style={styles.formHeaderText}>Register</Text>
      </View>

      <View style={Container}>
        {/* Form Girdileri */}
        <Controller
        style={InputContainer}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={Input}
              placeholder="Enter Username..."
            />
          )}
          name="name"
          rules={{ required: 'Please enter username!' }}
        />
        {errors.name && <Text style={ErrorMessage}>{errors.name.message}</Text>}

        <Controller
        style={InputContainer}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={Input}
              placeholder="Enter Email ID..."
            />
          )}
          name="email"
          rules={{ required: 'Please enter your email', pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' } }}
        />
        {errors.email && <Text style={ErrorMessage}>{errors.email.message}</Text>}
        <Controller
        style={InputContainer}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={Input}
              placeholder="Enter Mobile Number..."
            />
          )}
          name="mobile"
          rules={{ required: 'Please enter mobile number!' }}
        />
        {errors.name && <Text style={ErrorMessage}>{errors.name.message}</Text>}
        <Controller
        style = {InputContainer}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={Input}
              placeholder="Enter Password..."
            />
          )}
          name="pwd"
          rules={{ required: 'Password is required!' }}
        />
        {errors.name && <Text style={ErrorMessage}>{errors.name.message}</Text>}
        <Controller
        style={InputContainer}
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={Input}
              placeholder="Conform Password..."
            />
          )}
          name="conPwd"
          rules={{ required: 'Password is required!' }}
        />
        {errors.name && <Text style={ErrorMessage}>{errors.name.message}</Text>}

        {/* Submit Butonu */}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />

        
        {submittedData && (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedTitle}>Submitted Data:</Text>
            <Text>Name              : {submittedData.name}</Text>
            <Text>Email             : {submittedData.email}</Text>
            <Text>Mobile No         : {submittedData.mobile}</Text>
            <Text>Password          : {submittedData.pwd}</Text>
            <Text>Confirm Password  : {submittedData.conPwd}</Text>
          </View>
        )}
      </View>
      </View>
      
    </SafeAreaView>
  );
}
const ContentCenter = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  paddingHorizontal: 10,
};

const Container = {
  flex: 1,
  backgroundColor: '#fff',
  padding: 10,
};

const FormHeader = {
  backgroundColor: '#009587',
  padding: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginBottom: 20,
  alignItems: 'center',
  justifyContent: 'center',
};

const FormHeaderText = {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
};

const FormFieldsContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

const InputContainer = {
  marginVertical: 10,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#ddd',
  padding: 10,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

const Input = {
  height: 40,
  width: '100%',
  borderRadius: 5,
  borderColor: '#ddd',
  borderWidth: 1,
  padding: 10,
  margin:10,
  fontSize: 16,
  alignItems: 'center',
  justifyContent: 'center',
};

const ErrorMessage = {
  color: 'red',
  fontSize: 12,
  marginTop: 5,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const SubmitButton = {
  backgroundColor: '#009587',
  borderRadius: 5,
  padding: 10,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

const SubmitButtonText = {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
};

const SubmittedContainer = {
  marginTop: 20,
  borderTopWidth: 1,
  borderTopColor: '#ddd',
  paddingTop: 10,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

const SubmittedTitle = {
  fontSize: 18,
  fontWeight: 'bold',
};
const styles = StyleSheet.create({
  submittedContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingTop: 16,
  },
  submittedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
});

export default MyForm;



