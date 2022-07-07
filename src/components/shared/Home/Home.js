import first from './img/first.jpg'
import second from './img/second.jpg';
import third from './img/third.jpg';
import './Home.css';

export default function Home() {
  return (
    <section id="main">
      <article>
        <img src={first} alt="firstImg" />
        <img src={second} alt="secondImg" />
        <img src={third} alt="thirdImg" />
      </article>
      <p>
        Hello, in our website here you can upload your car for sale for FREE.
        Without any limits.
      </p>
    </section>
  );
}
