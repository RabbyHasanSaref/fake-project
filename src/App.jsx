import './App.css'
import Charts from './Component/Axios/Charts';
import Customnav from './Component/Header/Customnav'
import Price from './Component/Price/Price'
import LineChart from './Component/Rechart/LineChart';
// import Navbar from './Component/Header/Navbar'

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className='bg-yellow-200'>
        <Customnav></Customnav>
      </div>

      <div className='md:w-[1240px] mx-auto px-2 my-10'>
        <Price></Price>
      </div>

      <div className='md:w-[1240px] mx-auto px-2 my-10'>
        <LineChart></LineChart>
      </div>

      <div className='md:w-[1240px] mx-auto px-2 my-10'>
        <Charts></Charts>
      </div>
    </>
  )
}

export default App;
