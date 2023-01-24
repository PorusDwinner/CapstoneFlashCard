import React from 'react';
import '../Styles/LeftComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { setId } from '../flashCardSlicer/flashCardSlice';
const LeftComponent = () => {

  const flashcards = useSelector((state) => state.flashcard.flashcards);
  const dispatch = useDispatch();

  const renderCard = (id) => {
    dispatch(setId(id));
  }

  return (
    <div>
      <h4 className='font-medium leading-tight text-center text-base mt-4 mb-2 text-red-600
        2xl:text-xl
         '>
        Your Flash Cards
      </h4>
      <hr />

      <div className='overflow-y-auto h-80 hover:cursor-pointer'>
        {
          flashcards.map((ele, index) => (
            <h5 onClick={() => { renderCard(flashcards[index].card.groupid) }}
            id='leftCards'
              className='text-center mt-4 text-red-800 md:text-sm 2xl:text-lg 2xl:font-medium hover:text-md'>
              {flashcards[index].card.groupName}
              <hr className='w-60 mt-2 block m-auto' />
            </h5>
          ))
        }
      </div>

    </div>
  )
}

export default LeftComponent;
