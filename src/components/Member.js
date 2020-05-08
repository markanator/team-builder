import React from "react";

const Member = props => {
  return (
    <div className="member-list">
      {props.members.map(friend => (

        <div className="member" key={friend.id}>
          <img src={friend.image} alt={friend.name}/>
          <h2>{friend.name}</h2>
          <p>{friend.email}</p>
          <p>{friend.role}</p>
          
        </div>

      ))}
    </div>
  );
};

export default Member;

