import React from 'react';

const User = (props) => {
    return (
    <div>
      <div>{props.name}{props.age}</div>
    </div>

    );
};

export default User;