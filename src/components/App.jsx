import React, { useState } from 'react'
import ProductsDisplay from './ProductsDisplay'
import SearchField from './SearchField';
import "../css/style.css";
import UserData from "./Data.json"

const App = () => {
  const [filterSearch, setFilterSearch] = useState([]);
  return (
    <div className='container'>
        <SearchField setFilterSearch={setFilterSearch} UserData={UserData} filterSearch={filterSearch} />
        <ProductsDisplay filterSearch={filterSearch} />
    </div>
  )
}

export default App;