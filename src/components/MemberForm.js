import React, {useState, useEffect} from 'react';

const MemberForm = props => {

    const [isEditing,
        setIsEditing] = useState(false);

    const [member,
        setMember] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: '',
        image: ''
    });

    const changeHandler = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        if(props.memberToEdit.id != null ){
            setMember({...props.memberToEdit});
            setIsEditing(true);
            console.log("USE EFFECT", props.memberToEdit);
        } else {
            setIsEditing(false);
        }
    }, [props.memberToEdit]);

    const newOrEdit = (meme)=>{
        if (!isEditing){
            props.addMember(meme);
            console.log('NEW USER');
            setIsEditing(false);
        } else {
            console.log('EDITED USER');
            props.editor(meme);
            setIsEditing(false);
        }
    }

    return (
        <form
            className="member-form"
            onSubmit={event => {
                event.preventDefault(); 
                newOrEdit(member);
                setMember({ id: Date.now(), name: '', email:'',role:'', image: ''  });
                setIsEditing(false);
                }}>
            <label htmlFor="name">Name:
            </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={changeHandler}/><br/>
            <label htmlFor="email">Email:
            </label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={member.email}
                onChange={changeHandler}/><br/>
            <label htmlFor="role">Role:</label>
            <input
                id="role"
                name="role"
                type="text"
                placeholder="Role"
                value={member.role}
                onChange={changeHandler}/><br/>
            <label htmlFor="image">Imge URL:</label>
            <input
                id="image"
                name="image"
                type="text"
                placeholder="Image URL"
                value={member.image}
                onChange={changeHandler}/><br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default MemberForm;
