import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';

function App() {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json").then(response => {
      if (response) {
        return response.json();
      }
      throw response;
    }).then(result => {
      console.log('results:::::::::::', result)
      setTableData(result.cookies);
    }).catch(error => {
      console.log("Error fetching data :", error);
    })
    return () => {
      setTableData([]);
    }
  }, [])

  return (
    <div className="container">
      <Table data={tableData} />
    </div>
  );
}

export default App;
