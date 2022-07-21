import './Details.css';

import { Link } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useState } from 'react';
import { useAuth } from '../../../firebase';
import { useEffect } from 'react';

export default function Details() {
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
    <div className="detailsCar">
      {car.brand == undefined ? (
        <>
          <h1>Error 404</h1>
        </>
      ) : (
        <div className="info-buttons">
          <ul className="detailList">
            <li>
              <h2>
                {car.brand} {car.model}
              </h2>
            </li>
            <li>
              <h5>Millage: {car.millage} km</h5>
            </li>
            <li>
              <h5>Engine: {car.engine}</h5>
            </li>
            <li>
              <h5>Phone: {car.phone}</h5>
            </li>
            <li>
              <h5>Price: {car.price}$</h5>
            </li>
            <li>
              <h5>Description: {car.description}</h5>
            </li>
          </ul>
          {currentUser?.email !== car.user ? null : (
            <div className="buttons" data-user={car.user}>
              <ul>
                <li>
                  <Link id="editBtn" to={`/edit/${carId}`}>
                    Edit
                  </Link>
                </li>
                <li>
                  <Link id="deleteBtn" to={`/delete/${carId}`}>
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
