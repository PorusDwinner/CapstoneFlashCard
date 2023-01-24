import '../Styles/MiddleComponent.css';

const MiddleComponent = ({ filteredCard }) => {
  return (
    <div>
        <img className='m-2 h-80 object-cover aspect-square rounded shadow-lg
        sm:w-[90%] sm:h-[300px] 
        md:w-[96%] lg:w-[98%] lg:h-[200px]
        xl:h-[90%]'
          id='groupImage'
          src={filteredCard[0].card.groupImg}
          alt={filteredCard[0].card.groupname} />
        
        <p className='m-2'>
          {filteredCard[0].card.description}
        </p>
    </div>
  )
}

export default MiddleComponent;
