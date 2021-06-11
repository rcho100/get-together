/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Header, Segment,
} from 'semantic-ui-react';
import cuid from 'cuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';
import { createHangout, updateHangout } from '../hangoutActions';
import FormTextInput from '../../../app/common/form/FormTextInput';
import FormTextArea from '../../../app/common/form/FormTextArea';
import FormSelectInput from '../../../app/common/form/FormSelectInput';

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
          <Header sub color="teal" content="Hangout Details" />
          <FormTextInput name="title" placeholder="Hangout Title" />
          <FormSelectInput
            name="category"
            placeholder="Category"
            options={[
              { key: 'drinks', text: 'Drinks', value: 'drinks' },
              { key: 'culture', text: 'Culture', value: 'culture' },
              { key: 'film', text: 'Film', value: 'film' },
              { key: 'food', text: 'Food', value: 'food' },
              { key: 'music', text: 'Music', value: 'music' },
              { key: 'travel', text: 'Travel', value: 'travel' },
            ]}
          />
          <FormTextArea name="description" placeholder="Description" rows={3} />
          <FormTextInput name="city" placeholder="City" />
          <FormTextInput name="venue" placeholder="Venue" />
          <FormTextInput name="date" placeholder="Date" type="date" />
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
