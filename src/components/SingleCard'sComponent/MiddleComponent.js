

const MiddleComponent = ({ filteredCard }) => {
  return (
    <div className='flex'>
        <img id='groupImage'
        className='m-2 h-80 object-cover aspect-square rounded shadow-lg'
          src={filteredCard[0].card.groupImg}
          alt={filteredCard[0].card.groupname}
        />
        
        <p className='m-2 text-lg font-serif'>
          {filteredCard[0].card.description}
        </p>
    </div>
  )
}

export default MiddleComponent;
