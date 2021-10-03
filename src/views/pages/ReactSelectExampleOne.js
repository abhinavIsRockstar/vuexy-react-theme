import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'





const userData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const item = await data.json();
    console.log(item,'item');
    // setuserName(item)
    getUserData(item);
    
  }

function getUserData (item){
    const userInfo = item;
    return userInfo;
}

const nameOptions = getUserData.map((item) =>(
    { value: item.name, label : item.name}
  ))


  
const filterOptions = (inputValue) => {
    return nameOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())    
    );
};

const loadOptions = (inputValue, callback) => {
  console.log(inputValue,'input value in loadOptions')
    setTimeout(() => {
      callback(filterOptions(inputValue));
    }, 1000);
  };

export default class ReactSelectExampleOne extends Component {

    handleInputChange = (newValue) => {

        console.log(newValue,'newValue in handleInputChange')
        const inputValue = newValue.replace(/\W/g, '');
        console.log(inputValue,'inputValue in handleInputChange')
        // setinputValue(inputValue);
        return inputValue;

    }
    render() {
        return (
            <div>
          <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
            </div>
        )
    }
}
