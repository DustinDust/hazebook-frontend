import {
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Tooltip,
  VisuallyHidden,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import styles from './SignUpForm.module.scss';

type signUpSchema = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  dateOfBirth?: string;
};
const signUpValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('(*) Required!'),
  password: Yup.string()
    .min(6, 'Password must be atleast 6 characters long')
    .required('(*) Required!'),
  confirmPassword: Yup.string().when('password', {
    is: (val: string) => !!val && val.length >= 6,
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Password does not match')
      .required('(*) Required'),
  }),
  name: Yup.string().required('(*) Required!'),
  dateOfBirth: Yup.string(),
});

const SignUpForm: React.FC = (props) => {
  const handleSignUpFormSubmit = (values: signUpSchema) => {
    console.log(values);
  };

  return (
    <Stack padding={5} direction={['column', 'row']} spacing='20'>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          dateOfBirth: moment(new Date(0)).format('YYYY-MM-DD'),
        }}
        onSubmit={handleSignUpFormSubmit}
        validationSchema={signUpValidationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <VStack gap={5}>
              <SimpleGrid columns={[1, null, 2]} columnGap={10} rowGap={5}>
                <FormControl
                  isInvalid={!!formik.errors.email && formik.touched.email}
                  isRequired
                >
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Field
                    as={Input}
                    name='email'
                    id='email'
                    placeholder='Email'
                    focusBorderColor='#2f855a'
                  />
                  <ErrorMessage name='email'>
                    {(errorMessasge) => (
                      <Tooltip
                        label={errorMessasge}
                        isOpen
                        placement='right'
                        hasArrow={true}
                        backgroundColor='red.300'
                      >
                        <VisuallyHidden p={1} />
                      </Tooltip>
                    )}
                  </ErrorMessage>
                </FormControl>

                <FormControl
                  isRequired
                  isInvalid={!!formik.errors.name && formik.touched.name}
                >
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Field
                    as={Input}
                    name='name'
                    id='name'
                    placeholder='Name'
                    focusBorderColor='#2f855a'
                  />
                  <ErrorMessage name='name'>
                    {(errorMessasge) => (
                      <Tooltip
                        label={errorMessasge}
                        isOpen
                        placement='right'
                        hasArrow={true}
                        backgroundColor='red.300'
                      >
                        <VisuallyHidden p={1} />
                      </Tooltip>
                    )}
                  </ErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    !!formik.errors.password && formik.touched.password
                  }
                  isRequired
                >
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Field
                    as={Input}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    focusBorderColor='#2f855a'
                  />
                  <ErrorMessage name='password'>
                    {(errorMessasge) => (
                      <Tooltip
                        label={errorMessasge}
                        isOpen
                        placement='right'
                        hasArrow={true}
                        backgroundColor='red.300'
                      >
                        <VisuallyHidden p={1} />
                      </Tooltip>
                    )}
                  </ErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={
                    !!formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                  }
                >
                  <FormLabel htmlFor='confirmPassword'>
                    Confirm password
                  </FormLabel>
                  <Field
                    as={Input}
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Confirm password'
                    focusBorderColor='#2f855a'
                  />
                  <ErrorMessage name='confirmPassword'>
                    {(errorMessasge) => (
                      <Tooltip
                        label={errorMessasge}
                        isOpen
                        placement='right'
                        hasArrow={true}
                        backgroundColor='red.300'
                      >
                        <VisuallyHidden p={1} />
                      </Tooltip>
                    )}
                  </ErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    !!formik.errors.dateOfBirth && formik.touched.dateOfBirth
                  }
                >
                  <FormLabel htmlFor='dateOfBirth'>Date Of Birth</FormLabel>
                  <input
                    className={`${styles.dateInput} ${
                      formik.touched.dateOfBirth && !!formik.errors.dateOfBirth
                        ? styles.invalid
                        : styles.valid
                    }`}
                    type='date'
                    id='dateOfBirth'
                    name='dateOfBirth'
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name='dateOfBirth'>
                    {(errorMessasge) => (
                      <Tooltip
                        label={errorMessasge}
                        isOpen
                        placement='right'
                        hasArrow={true}
                        backgroundColor='red.300'
                      >
                        <VisuallyHidden p={1} />
                      </Tooltip>
                    )}
                  </ErrorMessage>
                </FormControl>
              </SimpleGrid>

              <Button type='submit' colorScheme={'green'}>
                Sign-up
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default SignUpForm;
