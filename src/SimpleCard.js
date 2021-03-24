import { Button, Card } from 'react-bootstrap'
import { useState } from 'react'
import SimpleCardDetail from './SimpleCardDetail'
import { useDispatch } from 'react-redux'
import { deleteShip } from './store/starshipStore/actions'

export default ({ starship }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const deleteStarship = async () => {
    dispatch(deleteShip(starship.id))
  }

  return (
    <Card className={'Card'}>
      <Card.Img
        style={{ height: 150, objectFit: 'cover' }}
        variant='top'
        src={starship.image}
      />
      <Card.Body>
        <Card.Title>{starship.name}</Card.Title>
        <Card.Text style={{ minHeight: 50 }}>
          Manufacturer: {starship.manufacturer}
        </Card.Text>
        <div>
          <Button variant='primary' onClick={() => setOpen(true)}>
            Details
          </Button>
          <Button variant='danger' onClick={deleteStarship}>
            Delete
          </Button>
        </div>
      </Card.Body>
      <SimpleCardDetail
        starship={starship}
        show={open}
        handleClose={() => setOpen(false)}
      />
    </Card>
  )
}
