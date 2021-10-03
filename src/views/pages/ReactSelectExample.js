import Axios from 'axios';
import React, {useState, useEffect } from 'react'
import Select from 'react-select'
// import { options } from './data';
import AsyncSelect from 'react-select/async'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



console.log(options,'options');

export default function ReactSelectExample() {

  const [userName, setuserName] = useState([])
  

  const userData = async (inputValue) => {
    
    console.log('inside userdata')
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const item = await data.json();
    // console.log(item,'item');
    // setuserName(item.map((i)=>(
    //   { value: i.name, label : i.name}
    // )))
   
    // console.log(userName,'username')
    // return userName.filter(({name})=> name.toLowerCase().includes(inputValue))
    return item
      .filter(({ name }) => name.toLowerCase().includes(inputValue))
      .map(({ name }) => ({ value: name, label: name }))    
  }
  console.log(userName,'username')


  // useEffect(() => {
  //   filterUserData();
  // },[])


  // const nameOptions =  userName.map((item) =>(
  //   { value: item.name, label : item.name}
  // ))

//   const filterOptions =  (inputValue) => {
//     console.log(inputValue,'inside filterOptions')
//     return userName.filter(i =>
//     i.label.toLowerCase().includes(inputValue.toLowerCase())    
//     );
// };

const loadOptions = (inputValue, callback) => {
  console.log(inputValue,'inside loadoption')
    setTimeout( async() => {
      callback( await userData(inputValue));
    }, 1000);
  };

// console.log(nameOptions,'nameOptions')

// console.log(userName,'userName')   

const handleInputChange = (newValue) => {

        console.log(newValue,'inside handleInputChange')
        const inputValue = newValue.replace(/\W/g, '');
        console.log(inputValue,'inputValue in handleInputChange')
        // setinputValue(inputValue);
        return inputValue;

    }

    return (
        <div>
            <h1>There will be React Select Example </h1>
            {/* <MyComponent /> */}
            {/* <Select options={options} /> */}

        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
        />

        </div>
    )
}
