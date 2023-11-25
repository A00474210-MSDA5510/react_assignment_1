import "../App.css";
import img from '../mypic.jpg'

function AboutMe() {
  return (
    <div className="App">
    <img src={img}  width="75%" />
    <h1>Welcome to the website about me! This is dev</h1>
    <p>
      My name is Andy Wang(Zunyang Wang), I graduated from George Fox University in 2021
      as a Computer Science Major, I worked in Memsonics in Wuhan China as a EDA Engineer
      in the PDK team. I went to High School in Hood River.
    </p>

    <h2>Fun facts</h2>
    <ul>
      <li>I love Making Food</li>
      <li>I was born in China</li>
      <li>Horizon Christion School was my high school</li>
      <li>I make a killer pizza!</li>
      <li>I make beer/ciders/wine!</li>
      <li>I spend my teenage years in Hood River Oregon!</li>
    </ul>
  </div>
);
}

export default AboutMe;
