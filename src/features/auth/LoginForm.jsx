/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'semantic-ui-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
import FormTextInput from '../../app/common/form/FormTextInput';

export default function LoginForm() {
  return (
    <ModalWrapper size="mini" header="Login">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <FormTextInput name="email" placeholder="Email" />
            <FormTextInput name="password" placeholder="Password" />
            <Button
              type="submit"
              size="small"
              content="Login"
              color="blue"
              fluid // have the btn length fill up the area
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
