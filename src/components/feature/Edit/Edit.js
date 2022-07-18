import { useRef } from 'react';
import { editCar, useAuth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useState } from 'react';
import { useEffect } from 'react';

export default function AddCar() {
  const navigate = useNavigate();

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

  const brandRef = useRef();
  const modelRef = useRef();
  const millageRef = useRef();
  const engineRef = useRef();
  const phoneRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();


  function handleChange(e) {
    setCars(e.target.value);
  }

  async function handleAddCar(e) {
    e.preventDefault();
    let brandData = brandRef.current.value;
    let modelData = modelRef.current.value;
    let millageData = millageRef.current.value;
    let engineData = engineRef.current.value;
    let phoneData = phoneRef.current.value;
    let priceData = priceRef.current.value;
    let descriptionData = descriptionRef.current.value;
    if (
      brandData.length > 1 &&
      modelData.length > 1 &&
      millageData.length > 1 &&
      engineData.length > 1 &&
      phoneData.length > 1 &&
      priceData.length > 1 &&
      descriptionData.length > 1
    ) {
      await editCar(
        brandRef.current.value,
        modelRef.current.value,
        millageRef.current.value,
        engineRef.current.value,
        phoneRef.current.value,
        priceRef.current.value,
        descriptionRef.current.value
      );
      navigate('/');
    } else {
      alert('All field are required!');
    }
  }

  return (
    <>
      <div id="car-container">
        <form action="" id="add" onSubmit={handleAddCar}>
          <h2>Edit Car</h2>
          <div className="brandModel">
            <span className="brand">
              <label htmlFor="brand">Brand:</label>
              <input
                ref={brandRef}
                type="text"
                placeholder="Audi"
                value={car.brand}
                onChange={handleChange}
              />
            </span>
            <span className="model">
              <label htmlFor="model">Model:</label>
              <input
                ref={modelRef}
                type="text"
                placeholder="S2"
                value={car.model}
                onChange={handleChange}
              />
            </span>
          </div>
          <div className="millageEngine">
            <span className="millage">
              <label htmlFor="brand">Millage:</label>
              <input
                ref={millageRef}
                type="number"
                placeholder="150,000"
                value={car.millage}
                onChange={handleChange}
              />
            </span>
            <span className="engine">
              <label htmlFor="engine">Engine:</label>
              <input
                ref={engineRef}
                type="text"
                placeholder="Petrol"
                value={car.engine}
                onChange={handleChange}
              />
            </span>
          </div>
          <div className="pricePhone">
            <span className="phone">
              <label htmlFor="phone">Phone:</label>
              {/* <input type="text" placeholder='+359888888888'/> */}
              <input
                ref={phoneRef}
                type="tel"
                id="phone"
                name="phone"
                pattern="(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}"
                placeholder="+359888888888"
                value={car.phone}
                onChange={handleChange}
              ></input>
            </span>
            <span className="price">
              <label htmlFor="price">Price:</label>
              <input
                ref={priceRef}
                type="number"
                placeholder="20,000"
                value={car.price}
                onChange={handleChange}
              />
            </span>
          </div>
          <div className="textAreaField">
            <span className="description">
              <label htmlFor="description">Description:</label>
              <textarea
                ref={descriptionRef}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Some description..."
                value={car.description}
                onChange={handleChange}
              ></textarea>
            </span>
          </div>
          <div className="btnImage">
            {/* <input
              type="file"
              id="addImage"
              // onChange={(event) => {
              //   setImageUpload(event.target.files[0]);
              // }}
            /> */}
            <input type="submit" value="Edit" id="addBtn" />
          </div>
        </form>
      </div>
    </>
  );
}
