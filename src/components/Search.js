import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import "./index.css"


const MainContet = () => {
  return (
    <div className="searchcontainer">
      <div className='searchcont'>
        <input type="search"  className='search' placeholder="Search..." />
        <div className='searchIcon'><SearchIcon/></div>
        </div>
        <div className='addContainer'>

        <button className='adddItem' type="submit">Add item</button>
        <p className='printIcon'><PrintOutlinedIcon/></p>
</div>
    </div>
  )
}

export default MainContet


// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";


// const SearchBar = ()=>{
// return ( 
// <>
//     <div
//       style={{
//         width: "90vw",
//         paddingLeft: "0px",
//         paddingRight: "60px",
//       }}
//     >
//     <div
//       style={{
//         height: "25px",
//         width: "100%",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//     <div
//       style={{
//         height: "30px",
//         width: "200px",
//         borderRadius: "10px",
//         border: "1px solid gray",
//       }} 
//      >
//     <input
//       placeholder="Search.."
//       style={{
//         border: "none",
//         padding: "5px 10px",
//         outline: "none",
//         backgroundColor: "transparent",
//       }}
//     />
//     </div>
//     </div>
//     </div>
//     </>

//     );
//     };

// export default SearchBar;