import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link,
  Spinner,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ModalWrapper } from '../UI';

type formValuesSchema = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('(*) Required!'),
  password: Yup.string()
    .min(6, '(*) Password needs to be atleast 6 characters')
    .required('(*) Required!'),
  rememberMe: Yup.boolean(),
});

export const LoginForm: React.FC = (props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const onLoginFormSubmit = (
    values: formValuesSchema,
    formikHelpers: FormikHelpers<formValuesSchema>
  ) => {
    onOpen();
    console.log(values);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <>
      <ModalWrapper
        onClose={onClose}
        closeOnOverlayClick={false}
        header={
          <Center>
            <Text>Signing you in</Text>
          </Center>
        }
        isOpen={isOpen}
        closeBtnPresent={false}
      >
        <Center>
          <Spinner color='green' size={'xl'} speed='1s' />
        </Center>
      </ModalWrapper>
      <Stack padding={5} direction='column'>
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
          onSubmit={onLoginFormSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <VStack gap={5}>
                <FormControl
                  isRequired
                  isInvalid={!!formik.errors.email && formik.touched.email}
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
                  isInvalid={
                    !!formik.errors.password && formik.touched.password
                  }
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
                <Field
                  as={Checkbox}
                  id='rememberMe'
                  name='rememberMe'
                  colorScheme='green'
                  alignSelf='start'
                >
                  Remember me?
                </Field>
                <Button type='submit' colorScheme={'green'}>
                  Sign-in
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <Text fontSize={'sm'}>
          Forgot your password?{' '}
          <Link as={ReactRouterLink} to='/forgot-password' color={'green'}>
            Click here
          </Link>
        </Text>
      </Stack>
    </>
  );
};
