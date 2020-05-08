import React, {useState} from 'react';

import Members from './components/Member';
import MemberForm from './components/MemberForm';

import './App.css';

function App() {
  const [teamList,
      setTeamList] = useState([
      {
          id: 1,
          name:  'Mark Ambro',
          email: "mark.ambro@me.com",
          role:  "Front End",
          image: 'https://avatars1.githubusercontent.com/u/16071902?s=460&u=5602fd491d54a6f63ee3d7' +
              'f0a48c194eaeda4bd5&v=4'
      },
      {
        id: 2,
        name:  'Mark ',
        email: "mark@me.com",
        role:  " End",
        image: 'https://avatars1.githubusercontent.com/u/16071902?s=460&u=5602fd491d54a6f63ee3d7' +
            'f0a48c194eaeda4bd5&v=4'
    }
  ]);

  const [memberToEdit,setMemberToEdit] = useState({});

  const addMember = newMember => {
      setTeamList([
          ...teamList,
          newMember
      ]);
  }

  const sendUserToEdit = editMem => {
      setMemberToEdit(editMem);
  }

  const editMember = member => {
    console.log("APP - EDITED",member);

    teamList.map((user) =>{
      
      if (member.id === user.id){
        const index = teamList.findIndex( x => x.id === member.id);
        teamList[index] = member;
        return setMemberToEdit({});
      
      } else {
        return null;
      }
    });
  }

  return (
      <div className="App">
          <h1>My Team</h1>
          <div className="member-form">
              <MemberForm addMember={addMember} memberToEdit={memberToEdit} editor={editMember} />
          </div>
          <Members members={teamList} edit={sendUserToEdit}/>
      </div>
  );
}

export default App;
