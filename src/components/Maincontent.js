

import React, { useState } from 'react';
import Modal from 'react-modal';
import fruitImg from "./Avocado Hass.jpg"
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import ApprovedButton from "./ApprovedButton"
import MissingButton from "./MissingButton"
import "./index.css"

const dummyData = [
  {
    key:1,
    productName: [fruitImg,'Chicken Brest Fillets, Boneless mattu maMarinated 6 Ounce Raw, Invivd'],
    brand: 'Hormel Black Labelmany',
    price: `$60.67/6+1LB`,
    quantity: `0*6+1Lb`,
    total: 0,
    status: [<DoneOutlinedIcon/>, <CloseOutlinedIcon/> ,"Edit"],
  },
  {
    key:2,
    productName: [fruitImg,'Chicken Brest Fillets, Boneless mattu maMarinated 6 Ounce Raw, Invivd'],
    brand: 'Hormel Black Labelmany',
    price: `$60.67/6+1LB`,
    quantity: `15*6+1Lb`,
    total: `$9000`,
    status: [<DoneOutlinedIcon/>, <CloseOutlinedIcon/> ,"Edit"],
  },
  {
    key:3,
    productName: [fruitImg,'Chicken Brest Fillets, Boneless mattu maMarinated 6 Ounce Raw, Invivd'],
    brand: 'Hormel Black Labelmany',
    price: `$60.67/6+1LB`,
    quantity: `15*6+1Lb`,
    total: `$9000`,
    status: [<DoneOutlinedIcon/>, <CloseOutlinedIcon/> ,"Edit"],
  },
  {
    key:4,
    productName: [fruitImg,'Chicken Brest Fillets, Boneless mattu maMarinated 6 Ounce Raw, Invivd'],
    brand: 'Hormel Black Labelmany',
    price: `$60.67/6+1LB`,
    quantity: `0*6+1Lb`,
    total: 0,
    status: [<DoneOutlinedIcon/>, <CloseOutlinedIcon/> ,"Edit"],
  },
  {
    key:5,
    productName: [fruitImg,'Chicken Brest Fillets, Boneless mattu maMarinated 6 Ounce Raw, Invivd'],
    brand: 'Hormel Black Labelmany',
    price: `$60.67/6+1LB`,
    quantity: `13*6+1Lb`,
    total: `$12,654.32`,
    status: [<DoneOutlinedIcon/>, <CloseOutlinedIcon/> ,"Edit"],
  },
];



const TableWithDummyData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [approvedRows, setApprovedRows] = useState([]);
  const [missingRows, setMissingRows] = useState([]);

  const onClickUrgent = (index) => {
    setIsModalOpen(true);
    setSelectedRow(index);
  }

  const onClickNotUrgent = () => {
    setIsModalOpen(true);
  }

  const onClickEdit = () => {
    // Handle edit action if needed
  }

  const handleYes = () => {
    setIsModalOpen(false);
    setApprovedRows(prev => [...prev, selectedRow]);
    setMissingRows(prev => prev.filter(row => row !== selectedRow));
  };

  const handleNo = () => {
    setIsModalOpen(false);
    setMissingRows(prev => [...prev, selectedRow]);
    setApprovedRows(prev => prev.filter(row => row !== selectedRow));
  };

  return (
    <div>
      <table className="maintable" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th className='mainHeading'>Product Name</th>
            <th className='mainHeading'>Brand</th>
            <th className='mainHeading'>Price</th>
            <th className='mainHeading'>Quantity</th>
            <th className='mainHeading'>Total</th>
            <th className='mainHeading status'>Status </th>
          </tr>
        </thead>
       
        <tbody  className='mainBodtCont'>
          {dummyData.map((item, index) => (
            <tr key={index} className='mainBody'>
              <td><img className='image' src={item.productName[0]} alt="fruit" /></td>
              <td className='mainmatter'>{item.productName[1]}</td>
              <td className='mainmatter'>{item.brand}</td>
              <td className='mainmatter'>{item.price}</td>
              <td className='mainmatter'>{item.quantity}</td>
              <td className='mainmatter'>{item.total}</td>

              <td>
                {approvedRows.includes(index) && (
                  <button className='Approvedbtm'><ApprovedButton /></button>
                )}
                {missingRows.includes(index) && (
                  <button className='missingbtm'><MissingButton /></button>
                )}
              </td>

              <td><button className='statusButton' onClick={() => onClickUrgent(index)}>{item.status[0]}</button></td>
              <td><button className='statusButton' onClick={onClickNotUrgent}>{item.status[1]}</button></td>
              <td><button className='statusButton' onClick={onClickEdit}>{item.status[2]}</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => onClickNotUrgent()}
        contentLabel="Confirmation Modal"
      >
        <h3 className='orderHeaderHeading'>Missing product</h3>
        <button className='cross'>X</button>
        <p  className='orderHeaderHeading'>Is '{dummyData[selectedRow]?.productName[1]}' urgent?</p>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </Modal>
    </div>
  );
};

export default TableWithDummyData;
