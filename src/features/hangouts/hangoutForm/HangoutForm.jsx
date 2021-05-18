/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Header, Segment, FormField,
} from 'semantic-ui-react';
import cuid from 'cuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Form, Field,
} from 'formik';
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

  return (
    <Segment clearing>
      <Header content={selectedHangout ? 'Edit Hangout' : 'Create New Hangout'} />
      <Formik
        initialValues={initialValues}
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
          </FormField>
          <FormField>
            <Field name="category" placeholder="Category" />
          </FormField>
          <FormField>
            <Field name="description" placeholder="Description" />
          </FormField>
          <FormField>
            <Field name="city" placeholder="City" />
          </FormField>
          <FormField>
            <Field name="venue" placeholder="Venue" />
          </FormField>
          <FormField>
            <Field name="date" placeholder="Date" type="date" />
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
