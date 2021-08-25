import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { locationTypes } from './constants/actionTypes'
import { Container, Row, Col, Button, Form } from 'bootstrap-4-react'
import API from './config/api';

const {
  STORE_SUCCESS,
  STORE_FAIL,
  STORE_DESTROY
} = locationTypes

const App = () => {
  const [provinces, setProvinces] = useState(null)
  const [cities, setCities] = useState(null)
  const [districts, setDistricts] = useState(null)
  const [villages, setVillages] = useState(null)

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const fetchProvinsi = async () => {
    try {
      const response = await API.get('provinces')
      const provinces = response.data
      setProvinces(provinces)
    } catch (err) {
      alert(err)
    }
  }

  const fetchKota = async (id) => {
    try {
      const response = await API.get(`regencies_of/${id}`)
      const cities = response.data
      setCities(cities)
    } catch (err) {
      alert(err)
    }
  }

  const fetchKec = async (id) => {
    try {
      const response = await API.get(`districts_of/${id}`)
      const districts = response.data
      setDistricts(districts)
    } catch (err) {
      alert(err)
    }
  }

  const fetchKel = async (id) => {
    try {
      const response = await API.get(`villages_of/${id}`)
      const villages = response.data
      setVillages(villages)
    } catch (err) {
      alert(err)
    }
  }

  const updateData = (data) => {
    dispatch({
      type: STORE_SUCCESS,
      payload: {

      }
    })
  }

  useEffect(() => {
    fetchProvinsi()
  }, [])

  return (
    <Container className='p-3'>
      <Form.Select onChange={(e) => fetchKota(e.target.value)} mb='3'>
        <option>-- Pilih Provinsi --</option>
        {!provinces ? null : provinces.map((province, index) => (
          <option key={index} value={province.id}>{province.name}</option>
        ))}
      </Form.Select>
      <Form.Select onChange={(e) => fetchKec(e.target.value)} mb='3'>
        <option>-- Pilih Kota/Kabubaten --</option>
        {!cities ? null : cities.map((citie, index) => (
          <option key={index} value={citie.id}>{citie.name}</option>
        ))}
      </Form.Select>
      <Form.Select onChange={(e) => fetchKel(e.target.value)} mb='3'>
        <option>-- Pilih Kecamatan --</option>
        {!districts ? null : districts.map((district, index) => (
          <option key={index} value={district.id}>{district.name}</option>
        ))}
      </Form.Select>
      <Form.Select mb='3'>
        <option>-- Select Kelurahan/Desa --</option>
        {!villages ? null : villages.map((village, index) => (
          <option key={index} value={village.id}>{village.name}</option>
        ))}
      </Form.Select>
    </Container>
  );
}

export default App;
