const Header = (props) => {
  console.log('Header Component')
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {
  console.log('Part Component')
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log('Content Component')
  return (
    <div>
      {props.contentObject.map((element, index) => {
        return <Part key={index} name={element.name} exercises={element.exercises} />
      })}
    </div>
  )
}

const Total = (props) => {
  console.log('Total Component');
  const parts = props.parts;
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content contentObject={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App