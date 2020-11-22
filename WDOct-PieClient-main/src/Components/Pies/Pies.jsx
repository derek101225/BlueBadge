import {useState, useEffect} from 'react';
import Pie from './Pie/Pie';

const Pies = (props) => {

  const [pies, setPies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/pies', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token
      }
    })
    .then(res => res.json())
    .then(data => setPies(data))
  }, [])

  const testDataPies = [
    {
        flavor: 'Pumpkin',
        baseOfPie: 'Pumpkin puree',
        crust: 'Pastry',
        vegan: true,
        size: 8,
        hotPie: false
    },
    {
        flavor: 'Apple',
        baseOfPie: 'Jam',
        crust: 'Graham cracker',
        vegan: true,
        size: 6,
        hotPie: true
    },
    {
        flavor: 'Chocolate',
        baseOfPie: 'Pudding',
        crust: 'Pastry',
        vegan: false,
        size: 8,
        hotPie: false
    }
  ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Flavor</th>
            <th>Base of Pie</th>
            <th>Size</th>
            <th>Vegan?</th>
            <th>Hot Pie?</th>
            <th>Crust</th>
          </tr>
        </thead>
        <tbody>
  {/*<NameOfComponent newNameInNewComponent={nameOfVar/FunctionInThisComponent} />*/}
          <Pie pies={pies} myName="Ingeborg" />
        </tbody>
      </table>
    </div>
  );
};

export default Pies;


