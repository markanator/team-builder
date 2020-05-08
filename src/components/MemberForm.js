import React, {useState} from 'react';

const MemberForm = props => {

    const [member,
        setMember] = useState({
        id: Date.now(),
        name:  '',
        email: '',
        role:  '',
        image: ''
    });

    const changeHandler = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            className="member-form"
            onSubmit={event => {
            event.preventDefault(); //prevents refresh
            props.addMember(member); //add notes on APP state
            // reset
            setMember({ name: '', email:'',role:'', image: '', id: Date.now() });
            }}>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={changeHandler}/><br />
            <label htmlFor="email">Email: </label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={member.email}
                onChange={changeHandler}/><br />
            <label htmlFor="role">Role:</label>
            <input
                id="role"
                name="role"
                type="text"
                placeholder="Role"
                value={member.role}
                onChange={changeHandler}/><br />
            <label htmlFor="image">Imge URL:</label>
            <input
                id="image"
                name="image"
                type="text"
                placeholder="Image URL"
                value={member.image}
                onChange={changeHandler}/><br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default MemberForm;
