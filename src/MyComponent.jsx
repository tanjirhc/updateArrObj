import { useState } from 'react'

function MyComponent(){

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar(){

  }

  function handleRemoveCar(index){

  }

  function handleYearChange(event){

  }

  function handleMakeChange(event){

  }

  function handleModelChange(event){

  }

  return( <div>
            <h2>List of Car Objects</h2>
            <ul>

            </ul>
            <input type="text" value={carYear}/>

          </div>)
}
export default MyComponent