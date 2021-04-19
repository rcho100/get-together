/* eslint-disable react/prop-types */
import React from 'react';
import HangoutListItem from './HangoutListItem';

export default function HangoutList({ hangouts }) {
  return (
    <>
      {hangouts.map((hangout) => (
        <HangoutListItem hangout={hangout} key={hangout.id} />
      ))}
    </>
  );
}
