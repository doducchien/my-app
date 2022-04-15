import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import { useState } from 'react';
const data = [
  {
    id: 1,
    description: 'Ant Design Title 1',
    value: '$10,000',
    isExpense: true
  },
  {
    id: 2,
    description: 'Ant Design Title 2',
    value: '$60,000',
    isExpense: false

  },
  {
    id: 3,
    description: 'Ant Design Title 3',
    value: '$12,000',
    isExpense: true

  },
  {
    id: 4,
    description: 'Ant Design Title 4',
    value: '$11,000',
    isExpense: true

  },
];


function App() {

  const [entries, setEntries] = useState([...data]);

  const deleteEntry = (id)=>{
    const newEntries = entries.filter(item => item.id !== id);
    setEntries(newEntries);
  }
  const addNewEntry = (entry)=>{
    entry.id = entries.length + 1;
    const newEntries = entries.concat(entry);
    setEntries(newEntries)
  }

  return (
    <div className='App'>
      <MainHeader title="Budget" level={2} />
      <section>
        <DisplayBalance title="Your Balance" value={1253.54} color="green" />
      </section>

      <section>
        <DisplayBalances />
      </section>

      <section>
        <MainHeader title="History" />
        <EntryLines entries={entries} deleteEntry={deleteEntry} />
      </section>
      <section>
        <MainHeader title="Add new transaction" />
        <NewEntryForm addNewEntry={addNewEntry}/>
      </section>
    </div>
  );
}

export default App;
