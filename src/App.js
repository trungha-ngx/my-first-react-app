import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

function App() {
  const expenses = [
    { title: 'Health Insurance', amount: 123, date: new Date(2022, 1, 23) },
    { title: 'Food', amount: 789, date: new Date(2022, 2, 31) },
    { title: 'Car Service', amount: 456, date: new Date(2022, 3, 12) },
  ];
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <small>Developed by EarlyBirdProgrammer</small>
      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
