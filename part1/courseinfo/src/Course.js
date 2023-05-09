
const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.part} {props.exercises}</p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const exercisesNumber = parts.reduce(
      (preValue, curPart) => preValue + curPart.exercises,
      0
    )
  
    return (
      <h4>Total of {exercisesNumber} exercises</h4>
    )
  }
  
  const Course = ({course}) => { 
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  export default Course;