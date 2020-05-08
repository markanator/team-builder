import React, { useState } from 'react';

const MemberForm = props => {

    const [member,setMember] = useState({
        id: Date.now(),
        name:'',
        image:''
    });

    const changeHandler = event => {
        setMember({
          ...member,
          [event.target.name]: event.target.value
        });
      };


    return(
        <form
      onSubmit={event => {
        event.preventDefault(); //prevents refresh
        props.addMember(member); //add notes on APP state
        // reset
        setMember({ name: '', image: '', id: Date.now() });
      }}
    >
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        value={member.name}
        onChange={changeHandler}
      />
      <label htmlFor="image">Imge URL:</label>
      <input
        id="image"
        name="image"
        type="text"
        placeholder="Image URL"
        value={member.image}
        onChange={changeHandler}
      />

      <button type="submit">Submit</button>
    </form>
    );
}

export default MemberForm;
