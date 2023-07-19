import React from 'react'

const UsersCard = ({user, deleteUserById, setUpdateInfo, setIsCloseForm}) => {

    const handleDelete = ()=>{
        deleteUserById('/users', user.id);
    }

    const handleEdit = ()=>{
        setUpdateInfo(user)
        setIsCloseForm(false)
    }

    return (

        

            <div>
                <div className="user_card">

                    <h3 className="user_name">{`${user.first_name} ${user.last_name}`}</h3>
                    <ul className='user_info'>
                        <li className='user_email'>
                            <span>Email: </span>
                            <span>{user.email}</span>
                        </li>
                        <li className='user_birthday'>
                            <span>Birthday: </span>
                            <span>{user.birthday}</span>
                        </li>
                    </ul>
                    <div className='card_btn'>
                        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
                        <button><i onClick={handleEdit} className='bx bxs-edit-alt'></i></button>
                    </div>

                </div>
            </div>
            
            
    

    )
}

export default UsersCard