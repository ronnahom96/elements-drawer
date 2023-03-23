import { useState } from 'react';
import GenericElementGrid from './components/grid/Grid';
import './App.css';

function App() {
  const [textAreaInputVal, setTextAreaInputVal] = useState(`2,1,gender,SELECT,Male,Female
  1,1,First Name,TEXT_INPUT,Enter your first name
  2,2,marital status,SELECT,Single,Maried,Divorced
  1,2,Last Name,TEXT_INPUT,Enter your last name`);
  const [genericElementList, setGenericElementList] = useState([]);

  const calculateElements = () => {
    const elementList = [];
    const textRows = textAreaInputVal.split("\n");
    textRows.forEach(textRow => {
      const [row, col, label, type, ...value] = textRow.trim().split(",");
      elementList.push({
        row, col, label, type, value
      })
    });

    elementList.sort((a, b) => Number(a.row + a.col) - Number(b.row + b.col));

    setGenericElementList(elementList);
  }

  const handleTextAreaInputChange = (e) => {
    setTextAreaInputVal(e.target.value);
  }

  return (
    <div className="app-container">
      <h1 className='title'>Elements Drawer</h1>
      <textarea className='text-area' value={textAreaInputVal} onChange={e => handleTextAreaInputChange(e)}></textarea>
      <input className='calculate-element-button' type='button' value="Calculate Elements" onClick={() => calculateElements()} />
      <GenericElementGrid genericElementList={genericElementList}></GenericElementGrid>
    </div>
  );
}

export default App;
