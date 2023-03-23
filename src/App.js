import { useState } from 'react';
import './App.css';
import Grid from './components/grid/Grid';

function App() {
  const [textAreaInputVal, setTextAreaInputVal] = useState(`1,1,gender,SELECT,Male,Female
  1,2,First Name,TEXT_INPUT,Enter your first name
  1,3,marital status,SELECT,Single,Maried,Divorced
  2,1,marital status,SELECT,Single,Maried,Divorced
  2,2,marital status,SELECT,Single,Maried,Divorced
  2,3,marital status,SELECT,Single,Maried,Divorced
  3,3,Last Name,TEXT_INPUT,Enter your last name`);
  const [genericElementList, setGenericElementList] = useState([]);
  const [rowNum, setRowNum] = useState(0);
  const [colNum, setColNum] = useState(0);

  const calculateElements = () => {
    const elementList = [];
    const textRows = textAreaInputVal.split("\n");
    let maxColumn = 0;
    let maxRow = 0;

    textRows.forEach(textRow => {
      const [row, col, label, type, ...value] = textRow.trim().split(",");
      maxRow = Math.max(col, maxColumn);
      maxColumn = Math.max(row, maxRow);
      elementList.push({ row, col, label, type, value })
    });

    const sortedElementList = sortElementListByRowCols(elementList);

    setRowNum(maxRow);
    setColNum(maxColumn);
    setGenericElementList(sortedElementList);
  }

  const sortElementListByRowCols = (elementList) => {
    return elementList.sort((a, b) => Number(a.row + a.col) - Number(b.row + b.col));;
  }

  const handleTextAreaInputChange = (e) => {
    setTextAreaInputVal(e.target.value);
  }

  return (
    <div className="app-container">
      <h1 className='title'>Elements Drawer</h1>
      <textarea className='textarea' value={textAreaInputVal} onChange={e => handleTextAreaInputChange(e)}></textarea>
      <input className='calculate-element-button' type='button' value="Calculate Elements" onClick={() => calculateElements()} />
      <Grid rowNum={rowNum} colNum={colNum} genericElementList={genericElementList} />
    </div>
  );
}

export default App;
