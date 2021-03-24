import { Button, Col, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'

export default ({ onInputChange, addUser, show, handleClose }) => {
  const [validate, setValidate] = useState(false)

  const checkAndAddUser = async (e) => {
    setValidate(true)
    try {
      await addUser(e)
      setValidate(false)
      handleClose()
    } catch (e) {
      window.alert(e)
    }
  }

  return (
    <Modal size='xl' centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='Form'>
          <Form validated={validate} style={{ width: '100%' }}>
            <Form.Row>
              <Col>
                <Form.Control
                  required
                  onChange={onInputChange}
                  name='name'
                  type='text'
                  placeholder='Enter your name'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a Name.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Form.Control
                  required
                  onChange={onInputChange}
                  type='text'
                  name='surname'
                  placeholder='Enter your surname'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a Surname.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Form.Control
                  required
                  onChange={onInputChange}
                  type='text'
                  name='email'
                  placeholder='Enter a valid email'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a Email.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Col>
              <Button onClick={checkAndAddUser} variant='primary' type='submit'>
                Submit
              </Button>
            </Col>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  )
}
