import { useState } from 'react';
import './App.css';
import GenericElementGrid from './components/ElementGrid/ElementGrid';

function App() {
  const [textAreaInputVal, setTextAreaInputVal] = useState('');
  const [genericElementList, setGenericElementList] = useState([]);

  const calculateElements = () => {
    const elementList = [];
    const textRows = textAreaInputVal.split("\n");
    textRows.forEach(textRow => {
      const [row, col, label, type, ...value] = textRow.split(",");
      elementList.push({
        row, col, label, type, value
      })
    });

    setGenericElementList(elementList);
  }

  const handleTextAreaInputChange = (e) => {
    setTextAreaInputVal(e.target.value);
  }

  return (
    <div className="app-container">
      <textarea className='text-area' value={textAreaInputVal} onChange={e => handleTextAreaInputChange(e)}></textarea>
      <input type='button' value="Calculate Elements" onClick={() => calculateElements()} />
      <GenericElementGrid genericElementList={genericElementList}></GenericElementGrid>
    </div>
  );
}

export default App;
