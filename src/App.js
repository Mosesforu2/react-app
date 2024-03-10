
import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('Dev');
  console.log('We are about to list the employees');
  const showEmployees = true;
  return (
    <div className="App">
      {console.log('Inside the return funtion')}
        <p>
          <h1>Hello World,</h1>
          {showEmployees ? 
          (<>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
            <Employee name='Moses' role='Intern'/>
            <Employee name='Prince' role={role}/>
            <Employee name='Abena' />
          </>)
          :
          (<h2>You cannot view employee data</h2>)
            
          }
          
        </p>
        
    </div>
  );
}

export default App;
