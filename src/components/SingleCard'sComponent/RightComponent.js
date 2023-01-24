import { saveAs } from 'file-saver';
import { BsFillShareFill } from 'react-icons/bs';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import { BsFillPrinterFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setModal} from '../flashCardSlicer/flashCardSlice';

const RightComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // To render the Team component on button click
    const renderTeam = () => {
        navigate('/tech_buddies');
    }

    // To set the value of modal global state in redux store
    const handelModal = () => {
        dispatch(setModal());
    }

    // saveAs function to save file
    const saveFile = () => {
        saveAs()
    }

    const handlePrint = () => {
        navigate('/print_flashcard');
    }

    return (
        
        <div className='flex flex-col flex-wrap'>
                
            <div>
                <button className='flex bg-white py-2 px-4 font-medium rounded block w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%] sm:mr-4'
                onClick={handelModal} >
                    <BsFillShareFill className='mt-1' /> <p className='ml-6 '>Share</p>
                </button>
            </div>

            <div>
                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%]'
                onClick={saveFile} >
                    <BsFillCloudDownloadFill className='mt-1' /> <p className='ml-2 2xl:ml-6'>Download</p>
                </button>
            </div>

            <div>
                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%]'
                onClick={handlePrint} >
                    <BsFillPrinterFill className='mt-1' />
                    <p className='ml-6'>Print</p>
                </button>

                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%]'
                    onClick={renderTeam}>
                    <HiUserGroup className='mt-2' /> <p className='ml-2 2xl:ml-6'>Our Team</p>
                </button>
            </div>
        
        </div> 
            
    )
}

export default RightComponent
