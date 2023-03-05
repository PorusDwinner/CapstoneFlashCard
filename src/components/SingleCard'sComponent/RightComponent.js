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

    {/* A function which returns the hard coded values for A4 size pdf.
        By making a seprate function we can use it in download and print functions
        without writing the whole code again and also both functons will do the expected job */}
    
    const pdfDoc = () => {
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
        return doc;
    }

    // This will make all details fit in a A4 size with hard codded values
    const handelDownload = () => {
        var doc = pdfDoc();
        doc.save(`${filteredCard[0].card.groupName}.pdf`);
    }

    // This will open a new window to print the pdf
    const handelPrint = () => {
        var doc = pdfDoc();
        doc.autoPrint();
        // this will open the print page in new window
        doc.output('dataurlnewwindow');
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
                <button className='flex bg-white mt-6 py-2 px-4 font-medium rounded block
                w-[90%] m-auto shadow-lg hover:bg-opacity-20 sm:w-[100%]'
                    onClick={handelPrint}>
                    <BsFillPrinterFill className='mt-1'/>
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
