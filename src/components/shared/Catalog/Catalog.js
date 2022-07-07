import './Catalog.css';
import third from './img/third.jpg';

export default function Catalog() {
  return (
    <section id="catalog">
      <h1>Catalog</h1>
      <ul id="listing">
        <li>
          <img className="thumbnail" src={third} alt="thirdImg" />
          <h3>Audi 90</h3>
          <h5>Fuel: Petrol</h5>
          <h5>Millage: 55,000km</h5>
          <div className="info">
            <h5 className="price">Price: 22,000$</h5>
            <h5 className="person">Person / Pleven</h5>
          </div>
        </li>
        <li>
          <img className="thumbnail" src={third} alt="thirdImg" />
          <h3>Audi 90</h3>
          <h5>Fuel: Petrol</h5>
          <h5>Millage: 55,000km</h5>
          <div className="info">
            <h5 className="price">Price: 22,000$</h5>
            <h5 className="person">Person / Pleven</h5>
          </div>
        </li>
        <li>
          <img className="thumbnail" src={third} alt="thirdImg" />
          <h3>Audi 90</h3>
          <h5>Fuel: Petrol</h5>
          <h5>Millage: 55,000km</h5>
          <div className="info">
            <h5 className="price">Price: 22,000$</h5>
            <h5 className="person">Person / Pleven</h5>
          </div>
        </li>
        <li>
          <img className="thumbnail" src={third} alt="thirdImg" />
          <h3>Audi 90</h3>
          <h5>Fuel: Petrol</h5>
          <h5>Millage: 55,000km</h5>
          <div className="info">
            <h5 className="price">Price: 22,000$</h5>
            <h5 className="person">Person / Pleven</h5>
          </div>
        </li>
        <li>
          <img className="thumbnail" src={third} alt="thirdImg" />
          <h3>Audi 90</h3>
          <h5>Fuel: Petrol</h5>
          <h5>Millage: 55,000km</h5>
          <div className="info">
            <h5 className="price">Price: 22,000$</h5>
            <h5 className="person">Person / Pleven</h5>
          </div>
        </li>
      </ul>
    </section>
  );
}
