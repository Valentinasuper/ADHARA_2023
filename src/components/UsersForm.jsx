import React from 'react'

const UsersForm = ({createNewUser, upDatePartialUser, objectUpdate, handleSubmit, reset, register}) => {

    const defaultValues = {
      first_name: '',
      last_name: '',
      email: '',
      birthday: '',
      password: ''
    }

    const submit = data => {
        if(objectUpdate !== undefined){
            upDatePartialUser(objectUpdate.id, data)
        } else {
            createNewUser(data)
        }
        reset(defaultValues)
    }


  return (
    <div className='form'>
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="first_name">First Name:</label>
                <input type="text" id='first_name' {...register('first_name')} placeholder='First Name'/>
            <label htmlFor="last_name">Last Name:</label>
                <input type="text" id='last_name' {...register('last_name')} placeholder='Last Name'/>
            <label htmlFor="email">Email:</label>
                <input type="text" id='email' {...register('email')} placeholder='Email'/>
            <label htmlFor="birthday">Birthday:</label>
                <input type="date" id='birthday' {...register('birthday')} />
            <label htmlFor="password">Password:</label>
                <input type="password" id='password' {...register('password')} placeholder='Password'/>
            <button className='button1'>
                <span className='text'>Submit</span>
                <i class="fa-solid fa-check icon1 fa-2x"></i>
            </button>      
        </form>

    </div>
  )
}

export default UsersForm