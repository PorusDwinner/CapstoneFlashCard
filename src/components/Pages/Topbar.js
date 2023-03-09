import { useNavigate } from "react-router-dom";

const Topbar = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-white flex flex-wrap justify-between'>
      <h1 className='p-4 text-3xl font-bold'>
        Flash Card Generator
      </h1>

      <div className="mt-3">
        <button className="mr-[2rem] py-2 text-xl text-slate-500 px-3
        font-medium border rounded-md hover:bg-red-600 hover:text-white"
          onClick={() => navigate('/tech_buddies')}
        >
            Our Team
        </button>
      </div>

    </div>
  )
}

export default Topbar;