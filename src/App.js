import React, { useState } from "react";
import Form from "./Form";
import "./App.css";
import Member from "./Member";
import { v4 as uuidv4 } from 'uuid';


const initialFormValues = {
  memberName: '',
  email: '',
  role: '',
};

const initialMembersList = [
  {
    memberName: 'Thanos',
    email: 'super@villian.com',
    role: 'Super Villian',
  }
];

function App() {
  const [members, setMembers] = useState(initialMembersList);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues, [inputName]: inputValue
    });
  };
  
  const submitForm = () => {
    // debugger;
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newMember.memberName || !newMember.email || !newMember.role) return;
    else {
      setMembers([newMember, ...members]);
      setFormValues(initialFormValues);
    }
  }
  
  console.log(members);
  return (
    <div className="container">
      <h1>Member Form</h1>

      <Form values={formValues} update={updateForm} submit={submitForm} />

      {members.map((member) => {
        return <Member key={uuidv4()} details={member} />;
      })}
      {/* {members.map((member) => {
        return(
          <div className='friend container'>
            <h2>{member.memberName}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
      ) 
      })} */}
    </div>
  );
}

export default App;
