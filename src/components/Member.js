import React from "react";

const Member = props => {
    return (
        <div className="member-list">
            {props
                .members
                .map(friend => (

                    <div className="member" key={friend.id}>
                        <img src={friend.image} alt={friend.name}/>
                        <h3>{friend.name}</h3>
                        <p>Email: {friend.email}</p>
                        <p>Role: {friend.role}</p>

                    </div>

                ))}
        </div>
    );
};

export default Member;
