import { useSelector, useDispatch } from 'react-redux'
import { locationTypes } from './constants/actionTypes'
import { Container, Row, Col, Button, Form } from 'bootstrap-4-react'

const {
  STORE_SUCCESS,
  STORE_FAIL,
  STORE_DESTROY
} = locationTypes

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const updateData = () => { }

  return (
    <Container className='p-3'>
      <Form.Select mb='3'>
        <option>-- Pilih Provinsi --</option>
      </Form.Select>
      <Form.Select mb='3'>
        <option>-- Pilih Kota/Kabubaten --</option>
      </Form.Select>
      <Form.Select mb='3'>
        <option>-- Pilih Kecamatan --</option>
      </Form.Select>
      <Form.Select mb='3'>
        <option>-- Select Kelurahan/Desa --</option>
      </Form.Select>
    </Container>
  );
}

export default App;
