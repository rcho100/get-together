/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Form, Header, Segment,
} from 'semantic-ui-react';

export default function HangoutForm({ setFormDisplayed }) {
  return (
    <Segment clearing>
      <Header content="Create New Hangout" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Hangout Title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Date" />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Create" />
        <Button onClick={() => setFormDisplayed(false)} type="submit" floated="right" content="Cancel" />
      </Form>
    </Segment>
  );
}
