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
                        <button onClick={(e)=>{
                            e.preventDefault();
                            props.edit(friend);
                        }}><i className="fas fa-user-edit"></i></button>  
                    </div>
                ))}
        </div>
    );
};

export default Member;
