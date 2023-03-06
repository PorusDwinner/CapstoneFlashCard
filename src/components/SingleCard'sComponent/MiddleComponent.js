

const MiddleComponent = ({ filteredCard }) => {
  return (
    <div className="flex flex-col">
      <div className='flex'>
        <img src={filteredCard[0].card.groupImg}
          alt={filteredCard[0].card.groupname}
          className='m-2 h-80 object-cover aspect-square rounded shadow-lg'
        />

        <p className='m-2 text-lg font-serif'>
          {filteredCard[0].card.description}
        </p>
      </div>

      <div className='flex'>
        <img src={filteredCard[0].card.termImg}
          alt={filteredCard[0].card.term[0].termName}
          className='h-80 m-2 object-cover aspect-square rounded shadow-lg' />

        <div className="m-2">
          <p className="font-medium text-xl text-slate-600" >
            <span>
              Term : 
            </span>
            {filteredCard[0].card.term[0].termName}
          </p>

          <p className="text-lg">
            <span>
              Defination :
            </span>
            {filteredCard[0].card.term[0].termDefination}
          </p>
        </div>
      </div>

    </div>
  )
}

export default MiddleComponent;
