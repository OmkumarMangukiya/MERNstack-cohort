import './App.css';
import { RevenueCard } from './components/RevenueCard';
function App() {
  return(
    <>
      {/* <div style = {{display : "flex" ,justifyContent:"center"}}>
        <div style = {{backgroundColor : "red"}}>hi </div>
        <div style = {{backgroundColor : "green"}}>hi </div>
        <div style = {{backgroundColor : "blue"}}>hi</div>
      </div>

      <div className='flex justify-between'>
      <div className='bg-red-500'>hi </div>
        <div className='bg-yellow-500'>hi </div>
        <div className='bg-blue-500'>hi</div>
      </div>

      <br />
      {/* Grids With eqauls parts */}
      {/* <div className='grid grid-cols-3'>
     < div className='bg-red-500 '>hi </div>
        <div className='bg-yellow-500'>hi </div>
        <div className='bg-blue-500'>hi</div>
      </div>
      {/* grids with different size */}

      {/* <div className='grid grid-cols-10'>
     < div className='bg-red-500 col-span-4'>hi </div>
        <div className='bg-yellow-500 col-span-4'>hi </div>
        <div className='bg-blue-500 col-span-2'>hi</div>
      </div> */}
        
        {/* Flex with different size */}
      {/* <div className='flex'>
     < div className='bg-red-500 w-[40%]'>hi </div>
        <div className='bg-yellow-500 w-[40%]'>hi </div>
        <div className='bg-blue-500 w-[20%]'>hi</div>
      </div>
      
    <div className='bg-red-500 md:bg-blue-500 '> Hello change size of this window.</div>


    <div className='grid grid-cols-1 md:grid-cols-3'>
    < div className='bg-red-500'>hi </div>
        <div className='bg-blue-500 '>hi</div>
        <div className='bg-yellow-500  '>hi </div>
    </div> */} 
    <div className='grid grid-cols-4'>
    <RevenueCard title='Amount Pending' orderCount="100" amount="23,214" />
    </div>
    
    </>
  )
}

export default App;
