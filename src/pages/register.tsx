
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/core'
import Wrapper from '../components/Wrapper'
import InputField from '../components/InputField'

function Register () {
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }} onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name='username' placeholder='Username' label='Username' />
            <Box mt='4'>
              <InputField name='password' placeholder='Password' label='Password' type='password' />
            </Box>
            <Button mt='4' isLoading={isSubmitting} type='submit' variantColor='teal'>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Register
