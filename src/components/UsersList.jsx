import React from 'react'

const UsersList = ({user, deleteUser, setObjectUpdate, setIsShowForm, reset}) => {

    const upDateUser = () => {
        setIsShowForm(true)
        const obj = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            birthday: user.birthday,
            password: user.password
        }
        reset(obj)
        setObjectUpdate(user)
    }


  return (
    <article className='card-of-user'>
        <h2 className='margin icon'><i class="fa-solid fa-user"></i> {user.first_name} {user.last_name} </h2>
        <p className='margin icon'><i class="fa-solid fa-at"></i> {user.email}</p>
        <p className='margin icon'><i class="fa-solid fa-cake-candles"></i> {user.birthday}</p>
        <hr className='hrcard'/>
        <div className='buttons'>
            <button className='trash' onClick={() => deleteUser(user.id)} ><i class="fa-solid fa-trash-can"></i></button>
            <button className='pencil' onClick={upDateUser} ><i class="fa-solid fa-file-pen"></i></button>
        </div>
    </article>
  )
}

export default UsersList