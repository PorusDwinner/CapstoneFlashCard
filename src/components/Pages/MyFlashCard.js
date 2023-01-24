import React, { useState } from 'react';
import '../Styles/MyFlashCard.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowDownUp } from 'react-icons/bs';
import Card from './Card';
import FlashCardDetails from './FlashCardDetails';


const MyFlashCard = () => {

  const navigate = useNavigate();
  const flashcards = useSelector((state) => state.flashcard.flashcards);
  const [showCard, setShowCard] = useState(false);
  const showFlash = useSelector((state) => state.flashcard.showFlash);
  //this will set the limit on how many cards should be shown
  const cardLimit = !showCard ? 6 : flashcards.length;

  return (
      
    <div className='2xl:ml-[4rem] 2xl:mr-[4rem]'>
      {!showFlash &&
      <section className='flex flex-wrap mt-16' id='cardContainerSection'>
        {
          flashcards.length > 0 ?
            (
              <div id='cardContainerDiv' >
                <div className='flex flex-wrap'>
                  {
                    flashcards.slice(0, cardLimit).map(({ card }, index) => (
                      <Card key={index} flashcard={card} /> 
                    ))
                  }
                </div>

                <div className='flex justify-center mt-6'>
                  {/* Since we have set the limit of cards to be shown to 6, this button will help user to see other cards also if more than 6 exist*/}
                  <button className='font-medium bg-red-600 text-white p-2 mb-4 rounded-full hover:bg-red-500'
                    onClick={() => setShowCard(!showCard)}>
                    <BsArrowDownUp />
                  </button>
                </div>
              </div>
            ) : (

              <div id='emptyDiv' className='bg-white shadow-lg p-20 display-block m-auto'>
                <div id='flexDiv' className='flex flex-row jsutify-around'>
                  <div>
                    <h1 style={{ textAlign: 'center' }} className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Nothing Here</span> Scalable AI.</h1>
                  </div>
                  <div>
                    <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                      <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                      <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                      </span>
                      <span className="relative text-white" onClick={() => navigate('/')}> Create Flash Card Now..! </span>
                    </a>
                  </div>
                </div>
              </div>
            )
        }
      </section>
      }

      {
        showFlash && (
          <div>
            <FlashCardDetails flashcards={flashcards} />
          </div>
        )
      }
    </div>

  )
}

export default MyFlashCard;


