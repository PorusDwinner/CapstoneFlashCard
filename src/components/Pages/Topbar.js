import '../Styles/Topbar.css';

const Topbar = () => {
  return (
    <div className='bg-white flex flex-wrap justify-between'>
      
      <div>
      <h1 className='p-4 text-3xl font-bold'>Flash Card Generator</h1>
      </div>

      <div className='mt-4 mr-6' id='loginButton'>
        <button className='font-medium text-lg border py-1 px-2 shadow-lg bg-red-600 text-white rounded-md'>
          Login/Signup
        </button>

      </div>
    </div>
  )
}

export default Topbar;