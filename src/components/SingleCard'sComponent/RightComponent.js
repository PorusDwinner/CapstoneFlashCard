import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { BsFillShareFill } from 'react-icons/bs';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import { BsFillPrinterFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModal } from '../flashCardSlicer/flashCardSlice';

const RightComponent = ({ filteredCard }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // This will make all details set in a A4 size with hard codded values
    const handelDownload = () => {
        var doc = new jsPDF('portrait', 'px', 'a4', 'true');
        doc.text(30, 20, `Group Name : ${filteredCard[0].card.groupName}`);

        var description = `Description : ${filteredCard[0].card.description}`;
        var strArr = doc.splitTextToSize(description, 400);
        doc.text(strArr, 30, 40);

        doc.text(30,335,`Term : ${filteredCard[0].card.term[0].termName}`);
        var defination = `Defination : ${filteredCard[0].card.term[0].termDefination}`;
        var strArr2 = doc.splitTextToSize(defination , 400);
        doc.text(strArr2 , 30 , 350 );

        doc.addImage(`${filteredCard[0].card.groupImg}` , 'jpg' ,65,430,300,200);
        doc.save('a.pdf');
    }

    return (

        <div className='flex flex-col flex-wrap'>

            <div>
                <button className='flex bg-white py-2 px-4 font-medium rounded block w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%] sm:mr-4'
                    onClick={() => dispatch(setModal())} >
                    <BsFillShareFill className='mt-1' /> <p className='ml-6 '>Share</p>
                </button>
            </div>

            <div>
                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block
                w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%]'
                    onClick={handelDownload}>
                    <BsFillCloudDownloadFill className='mt-1' />
                    <p className='ml-2 2xl:ml-6'>Download</p>
                </button>
            </div>

            <div>
                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%]'>
                    <BsFillPrinterFill className='mt-1' />
                    <p className='ml-6'>Print</p>
                </button>

                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%]'
                    onClick={() => navigate('/tech_buddies')}>
                    <HiUserGroup className='mt-2' /> <p className='ml-2 2xl:ml-6'>Our Team</p>
                </button>
            </div>

        </div>

    )
}

export default RightComponent
