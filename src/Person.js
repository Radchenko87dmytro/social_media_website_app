import React from 'react';
import PropTypes from "prop-types"

const Person = (props) => {
    return (
    <div>
      <h6>Name: {props.name}</h6>
      <h6>Email: {props.email}</h6>
      <h6>Age: {props.age}</h6>
      <h6>This person {props.isMarriad ? "is" : "is not"} MARRIED</h6>
      {/* {props.friends.map((friend)=>(
        <h6>{friend}</h6>
      ))} */}
      <h6>Friends: {props.friends}</h6>

    </div>

    );
};

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.string,
}

export default Person;