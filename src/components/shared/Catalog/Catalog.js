import { ref, onValue } from 'firebase/database';
import { getDatabase } from 'firebase/database';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

export default function Catalog() {
  const [cars, setCars] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) => {
          setCars(item);
        });
      }
    });
  }, []);

  return (
    <section id="catalog">
      <h1>Catalog</h1>
      <ul id="listing">
        {cars.length === 0 ? (
          <h1>No cars in database!</h1>
        ) : (
          Object.entries(cars).map((key) => {
            return (
              <Link to={`/details/${key[0]}`}>
                <li>
                  <h3>
                    {key[1].brand} {key[1].model}
                  </h3>
                  <h5>Fuel: {key[1].engine}</h5>
                  <h5>Millage: {key[1].millage} km</h5>
                  <div className="info">
                    <h5 className="price">Price: {key[1].price}$</h5>
                  </div>
                </li>
              </Link>
            );
          })
        )}
      </ul>
    </section>
  );
}
