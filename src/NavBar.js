import { Navbar, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, fetchAllUsers } from './store/starshipStore/actions'

export default ({ userName }) => {
  const [open, setOpen] = useState(false)
  const [showFormModal, setShowFormModal] = useState(false)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchAllUsers())
  // }, [])

  const closeForm = () => {
    setNewUser({})
    setShowFormModal(false)
  }

  const addNewUser = async (e) => {
    e.preventDefault()
    if (checkForm()) {
      dispatch(addUser(newUser))
    } else {
      throw new Error('Form not Valid')
    }
  }

  const onInputChange = (e) => {
    setNewUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  const checkForm = () => newUser.name && newUser.surname && newUser.email

  return (
    <Navbar bg='light' expand='lg'>
      <p>Spaceships Manager</p>
      <Button variant='primary' onClick={() => setOpen(true)}>
        Hello, {userName}
      </Button>
      <Button
        variant='primary'
        show={open}
        onClick={() => {
          setShowFormModal(true)
        }}
      >
        Log-In
      </Button>
      <NavbarForm
        show={showFormModal}
        handleClose={closeForm}
        onInputChange={onInputChange}
        addUser={addNewUser}
      />
    </Navbar>
  )
}
