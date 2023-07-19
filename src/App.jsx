import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UsersCard from './components/UsersCard'

function App() {

  const [isCloseForm, setIsCloseForm, ] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech/'
  
  const [ 
    users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById
  ] = useFetch(baseUrl)

  useEffect(() => {
    
    getAllUser('/users')
    
  }, [])
  
  const handleOpenForm = ()=>{
    setIsCloseForm(false)
  }

  return (
    <>
        <div className="app">

          <h1>Academlo Student Registration </h1>
          <button className='app_button' onClick={handleOpenForm}>Open Form</button>
        </div>


      <div className={`form-container ${isCloseForm && 'form_close'}`}>

          <FormUsers createNewUser={createNewUser}
            updateInfo={updateInfo}
            updateUserById={updateUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
          />
      </div>

      <div className='user'>
        {
          users?.map(user=>(
            <UsersCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
