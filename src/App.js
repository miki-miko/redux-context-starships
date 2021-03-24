import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Navbar } from 'react-bootstrap'
import './App.css'
import SimpleCard from './SimpleCard'
import StarShipForm from './StarShipForm'
import { useDispatch, useSelector } from 'react-redux'
import { addShip, fetchAllShips } from './store/starshipStore/actions'
import 'bootstrap/dist/css/bootstrap.min.css'
axios.defaults.headers.post['Content-Type'] = 'application/json'

function App() {
  const [showFormModal, setShowFormModal] = useState(false)
  const [newStarship, setNewStarship] = useState({})
  const dispatch = useDispatch()
  const starships = useSelector((state) => state.starships.starships)
  const userName = useSelector((state) => state.user.name)

  useEffect(() => {
    dispatch(fetchAllShips())
  }, [])

  const checkForm = () =>
    newStarship.name &&
    newStarship.manufacturer &&
    newStarship.image &&
    newStarship.crew >= 0 &&
    newStarship.passengers >= 0 &&
    newStarship.cargo_capacity >= 0

  const onInputChange = (e) => {
    setNewStarship((starship) => ({
      ...starship,
      [e.target.name]: e.target.value,
    }))
  }

  const closeForm = () => {
    setNewStarship({})
    setShowFormModal(false)
  }

  const addNewStarShip = async (e) => {
    e.preventDefault()
    if (checkForm()) {
      dispatch(addShip(newStarship))
    } else {
      throw new Error('Form not Valid')
    }
  }

  return (
    <div className={'App'}>
      <Navbar userName={userName} />
      <div className={'PostsContainer'}>
        {starships.map((starship) => (
          <SimpleCard starship={starship} key={starship.id} />
        ))}
      </div>
      <StarShipForm
        starship={newStarship}
        show={showFormModal}
        handleClose={closeForm}
        onInputChange={onInputChange}
        addPost={addNewStarShip}
      />
      <Button
        className={'addButton'}
        size={'lg'}
        variant={'primary'}
        onClick={() => setShowFormModal(true)}
      >
        {' '}
        +{' '}
      </Button>
    </div>
  )
}

export default App
