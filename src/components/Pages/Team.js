import data from '../Member Data/memberData';

const Team = () => {

  // Following two functions will open the links in different window
  const openLinkedinInNewTab = (url) => {
    window.open(url , '_blank' , 'noreferre');
  };

  const openGitHubInNewTab = (url) => {
    window.open(url , '_blank' , 'noreferre');
  };

  return (
    // map() function will go through each element of the data.js
    // thus will get all the details of each team memeber
    <div className='mt-[7rem]'>
      <div className='flex justify-around flex-wrap'
      id='teamDiv'>
        {
          data.map((ele) => (
            <div className='flex flex-col text-center'>
              <img src={ele.Image} alt={ele.Name}
              className='h-[10rem] w-[10rem] rounded-full border-2'/>

              <h2 className='text-4xl text-slate-700 font-medium'>
                {ele.Name}
              </h2>
              
              <div className='text-xl mt-2'>
                <p className='text-slate-600'>
                 @{ele.Batch}
                </p>

                <p className='text-slate-600 mt-2'>
                  {ele.Mobile_No}
                </p>

                <p className='text-slate-600 mt-2'>
                  {ele.E_mail}
                </p>

                <p className='text-slate-600 mt-2'>
                  {ele.Qualification}
                </p>
              </div>

              <div className='mt-4 flex flex-col'>
              <button className='mt-2 bg-blue-500 text-white rounded-sm py-1 hover:bg-blue-600'
              onClick={() => openLinkedinInNewTab(ele.Linkedin)}>
                Linkedin
              </button>

              <button className='bg-blue-500 text-white rounded-sm py-1 mt-1 hover:bg-blue-600'
              onClick={() => openGitHubInNewTab(ele.GitHub)}>
                Git Hub
              </button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Team