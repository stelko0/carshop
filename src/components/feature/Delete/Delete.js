import './Delete.css';

import { useNavigate } from 'react-router-dom';

import { getDatabase, ref, child, get } from 'firebase/database';
import { useState } from 'react';
import { useAuth } from '../../../firebase';
import { useEffect } from 'react';
import { deleteCarRecord } from '../../../firebase';

export default function DeleteCar() {
  const navigate = useNavigate();
  function handleDelete() {
    deleteCarRecord();
    navigate('/')
   }
  const url = window.location.href;
  const strs = url.split('/');
  const carId = strs.at(-1);
  const currentUser = useAuth();
  const [car, setCars] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `cars/${carId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          if (data !== null) {
            setCars(data);
          }
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="delete-car">
      {car.brand == undefined ? (
        <>
          <h1>Error 404</h1>
        </>
      ) : (
        <div className="delete-car">
          <h1>Are you sure to delete this car?</h1>
          <h3>Brand: {car.brand}</h3>
          <h3>Model: {car.model}</h3>
          <h3>Millage: {car.millage}</h3>
          <h3>Engine: {car.engine}</h3>
          <h3>Phone: {car.phone}</h3>
          <h3>Price: {car.price}$</h3>
          <h3>Description: {car.description}</h3>
          <button id='delete-car-btn' onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
