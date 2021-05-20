/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Header, Segment, FormField,
} from 'semantic-ui-react';
import cuid from 'cuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage, Label,
} from 'formik';
import * as Yup from 'yup';
import { createHangout, updateHangout } from '../hangoutActions';

export default function HangoutForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedHangout = useSelector((state) => (
    state.hangouts.find((hangout) => hangout.id === match.params.id)
  ));

  const initialValues = selectedHangout ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    category: Yup.string().required(),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Segment clearing>
      <Header content={selectedHangout ? 'Edit Hangout' : 'Create New Hangout'} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (selectedHangout) {
            dispatch(updateHangout({ ...selectedHangout, ...values }));
          } else {
            dispatch(createHangout({
              ...values,
              id: cuid(),
              hostedBy: 'Rich',
              attendees: [],
              hostPhotoURL: '/assets/defaultUserImage.png',
            }));
          }
          return history.push('/hangouts');
        }}
      >
        <Form className="ui form">
          <FormField>
            <Field name="title" placeholder="Hangout Title" />
            <ErrorMessage name="title" render={(error) => <Label basic color="red" content={error} />} />
          </FormField>
          <FormField>
            <Field name="category" placeholder="Category" />
            <ErrorMessage name="title" render={(error) => <Label basic color="red" content={error} />} />
          </FormField>
          <FormField>
            <Field name="description" placeholder="Description" />
            <ErrorMessage name="title" render={(error) => <Label basic color="red" content={error} />} />
          </FormField>
          <FormField>
            <Field name="city" placeholder="City" />
            <ErrorMessage name="title" render={(error) => <Label basic color="red" content={error} />} />
          </FormField>
          <FormField>
            <Field name="venue" placeholder="Venue" />
            <ErrorMessage name="title" render={(error) => <Label basic color="red" content={error} />} />
          </FormField>
          <FormField>
            <Field name="date" placeholder="Date" type="date" />
            <ErrorMessage name="title" render={(error) => <Label basic color="red" content={error} />} />
          </FormField>
          <Button
            type="submit"
            floated="right"
            positive
            content={selectedHangout ? 'Edit' : 'Create'}
          />
          <Button
            onClick={() => history.push('/hangouts')}
            floated="right"
            content="Cancel"
          />
        </Form>
      </Formik>
    </Segment>
  );
}
