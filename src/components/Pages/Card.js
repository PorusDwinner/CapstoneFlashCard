import '../Styles/Card.css';
import { useDispatch } from 'react-redux';
import { setShowFlash, setId } from '../flashCardSlicer/flashCardSlice';

const Card = ({ flashcard }) => {

  const dispatch = useDispatch();
  const handel_Render_Id_RightCard =(id) =>{
    dispatch(setId(id));
    dispatch(setShowFlash());
  }

  return (
    <div className='ml-0 mt-12 md:mt-2 md:block md:m-auto md:mb-10' id='cardContainerDiv'>
        <div id='cardMainDiv' className="p-4 mx-auto flex flex-col space-y-3 items-center justify-center bg-white rounded-md text-black w-[23rem] h-[13rem] relative border-2 shadow-lg border-slate-200">
          <div className='absolute -top-9'>
            {
              flashcard.groupImg ? (<img className='rounded-full w-16 h-16 object-cover aspect-square' src={flashcard.groupImg} alt={flashcard.groupname} />) :
                (<img className='rounded-full w-16 h-16 object-cover aspect-square' src='' alt={flashcard.groupname} />)
            }
          </div>

          <h2 className='font-bold decoration-slate-100 text-lg'>{flashcard.groupName}</h2>
          <p className='text-center font-medium text-sm text-slate-600 line-clamp-2 overflow-hidden text-ellipsis'>{flashcard.description}</p>
          <p className='font-medium text-sm text-slate-700' >{flashcard.term ? flashcard.term.length : 0} Card</p>

          <button
            className='py-1 px-16 text-red-600 font-semibold rounded-sm border-red-600 ring-2 ring-red-600'
            onClick={() => handel_Render_Id_RightCard(flashcard.groupid)} >
            View Cards
          </button>

        </div>
    </div>    
  )
}

export default Card;
