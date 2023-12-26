/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Actor from "./Actor";
import "./App.css";
import BookStore from "./BookStore";
import Singer from "./Singer";
import Todo from "./Todo";

function App() {
  const actors = ["sakib", "Rubel", "Manna", "Jasim", "Riaz"];
  const singers = [
    { id: 1, name: "Arijit", age: 67 },
    { id: 2, name: "Asif", age: 56 },
    { id: 3, name: "Arman", age: 34 },
    { id: 4, name: "Pritom", age: 27 },
  ];

  const books = [
    { id: 1, name: "Math", price: 120 },
    { id: 2, name: "English", price: 140 },
    { id: 3, name: "Bangla", price: 150 },
    { id: 3, name: "Accounting", price: 130 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer} />
      ))}
      <Actor name="Bappa Raz"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="learn React" isDone={true}></Todo>
      <Todo task="Learn Js" isDone={false}></Todo>
      <Todo task="Try Jsx" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="12" score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <>
      <h1>
        This Device: Name:{props.name} Price: {props.price}
      </h1>
    </>
  );
}

function Person() {
  const age = 20;
  const person = { name: "John" };
  return (
    <h3>
      I am a {person.name} With Age: {age}
    </h3>
  );
}

function Student({ grade = 1, score = 0 }) {
  const student = { name: "Shakib" };
  return (
    <div className="student">
      <h3>This is Student: {student.name}</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  return (
    <>
      <div
        style={{
          border: "2px solid grey",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>I am Developer: </h3>
        <p>Coding: </p>
      </div>
    </>
  );
}

export default App;
