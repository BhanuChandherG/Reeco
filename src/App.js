import React from 'react'
import Navbar from "./components/Navbar"
import OrderHeader from "./components/OrderHeader"
import OrderDetails from "./components/OrderDetails"
import SearchBar from "./components/Search"
import TableWithDummyData from "./components/Maincontent"

const App = () => (
<div className='appContainer'>
<Navbar/>
<OrderHeader/>
<OrderDetails/>
<SearchBar/>
<TableWithDummyData/>
</div>
)

export default App