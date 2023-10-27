import React from 'react'
import './Search.css'
import { useState } from 'react'

const Search = () => {
  const [MarkaziyData, setMarkaziyData] = useState(Search);
  const[search_word, setsearch_word] = useState("")

  function Search_1(word){
    let filtered = MarkaziyData.filter((item)=>{
      return item.id.toLowerCase().includes(word.toLowerCase()) || item.title?.toLowerCase().includes(word.toLowerCase())
    })

    setMarkaziyData(filtered)
    
  }
  

  return (
    <div className='search-div'>
        <div className='search-btn' onChange={(e)=>Search(e.target.value)} >
            <h2>Nimani qidiramiz?</h2>

        </div>

    </div>
  )
}

export default Search