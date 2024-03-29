import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-200 mt-20'>
        <img 
            width={180} 
            className='text-center mx-auto' 
            src={spinner} 
            alt="Loading..."
        />
    </div>
  )
}

export default Spinner