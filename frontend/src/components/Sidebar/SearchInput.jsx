import React from 'react'
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  const [search, setSearch] = useState("");

  
  return (
    // input within the button will be next to each other
    <form className = 'flex items-center gap-2'> 
        <input type='text' placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <FaSearch />


        </button>
    </form>
  )
}

export default SearchInput


// starter code for search input
// const SearchInput = () => {
//   return (
//     // input within the button will be next to each other
//     <form className = 'flex items-center gap-2'> 
//         <input type='text' placeholder='Search' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//             <FaSearch />


//         </button>
//     </form>
//   )
// }

// export default SearchInput