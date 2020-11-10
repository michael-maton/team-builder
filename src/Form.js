import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
            <input
              type="text"
              name="memberName"
              onChange={onChange}
              value={values.memberName}
              placeholder="enter username"
              maxLength="30"
            >
            </input>
        </label>

        <label>Email
            <input
              type="email"
              name="email"
              onChange={onChange}
              value={values.email}
              placeholder="enter email"
              maxLength="30"
            >
            </input>
        </label>

        <label>Role
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">-</option>
            <option value="backendEngineer">Backend Engineer</option>
            <option value="frontendEngineer">Frontend Engineer</option>
            <option value="designer">Designer</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
