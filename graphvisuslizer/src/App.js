import React from 'react'
import { useCallback,useState } from 'react';


function App() {
    const [centres,setCentres] = useState([]);
    const [centre1,setCentre1] = useState('');
    const [centre2,setCentre2] = useState('');
    const [connections,setConnections] = useState([]);

    const addConnection = useCallback(() => {
      if (centre1 && centre2) {
        const uniCentres = new Set(centres);
        uniCentres.add(centre1);
        uniCentres.add(centre2);
        setCentres(Array.from(uniCentres));
        setConnections([...connections, { from: centre1, to: centre2 }]);
        setCentre1('');
        setCentre2('');
    }
    },[centre1, centre2, centres, connections]);

    const renderCenters= () =>{
      return centres.map((centre, i) => (
        <g key={centre}>
          <circle cx={100 + (i * 150)} cy={100} r={30} fill="#4CAF50" />
          <text x={100 + (i * 150)} y={105} textAnchor="middle" fill="white">{centre}</text>
        </g>
      ));
    };

    const renderConnections= () => {
      return connections.map((conn, index) => {
        const from = centres.indexOf(conn.from);
        const to = centres.indexOf(conn.to);
        return (
          <line
            key={index}
            x1={100 + (from * 150)} y1={100}
            x2={100 + (to * 150)} y2={100}
            stroke="#2196F3"
            strokeWidth={3}
          />
        );
      });
    };
        
    return (
        <>
        <div>
           <input placeholder = "Enter the name of 1st distribution centre" 
            value = {centre1} type = "text"
            onChange = {(e) => setCentre1(e.target.value)}/> 
        </div>    
        <div>
           <input placeholder = "Enter the name of 2nd distribution centre" 
            value = {centre2} type = "text"
            onChange = {(e) => setCentre2(e.target.value)}/> 
        </div>     
        <button onClick={addConnection}>Add Connection</button>
          <div className="overflow-auto">
            <svg width="100%" height="500" viewBox="0 0 1000 200">
              {renderConnections()}
              {renderCenters()}
            </svg>
        </div>
      </>
      
    );
}

export default App;
