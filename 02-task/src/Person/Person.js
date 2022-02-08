import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p>Hello, my name is {props.name}, and I am {props.age} old.</p>
    </div>
  );
}

export default Person;
    