
import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('We are about to list the employees');
  const showEmployees = true;
  return (
    <div className="App">
      {console.log('Inside the return funtion')}
        <p>
          <h1>Hello World,</h1>
          {showEmployees ? 
          (<>
            <Employee />
            <Employee />
            <Employee />
          </>)
          :
          (<h2>You cannot view employee data</h2>)
            
          }
          
        </p>
        
    </div>
  );
}

export default App;
