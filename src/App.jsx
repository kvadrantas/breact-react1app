// import logo from './logo.svg';
// import './App.css';
// import Box from './Components/Box';
import Circle from './Components/Circle';

// import Simple from './Components/Simple';

// const data = [
//   {
//     ls: '2px',
//     boxColor: 'green',
//     boxNumber: '68'
//   },
//   {
//     ls: '1px',
//     boxColor: 'yellow',
//     boxNumber: '45'
//   },
//   {
//     ls: '-2px',
//     boxColor: 'white',
//     boxNumber: '90'
//   },
//   {
//     ls: '4px',
//     boxColor: 'pingk',
//     boxNumber: '101'
//   },
// ]

const circleData = [
  {circleColor: 'red'},
  {circleColor: 'green'},
  {circleColor: 'blue'},
  {circleColor: 'yellow'},
  {circleColor: 'pink'},
  {circleColor: 'orange'},
  {circleColor: 'brown'},
  {circleColor: 'fuchsia'},
]

function App() {
  return (
    <>
    {/* {data.map((box, i) => <Box key={i} boxColor={box.boxColor} ls={box.ls} boxNumber={box.boxNumber}/>)} */}
    {/* {Simple} */}

    {circleData.map((circle, i) => <Circle key={i} circleColor={circle.circleColor} circleNumber={i}></Circle>)}
    
    </>
  );
}

export default App;
