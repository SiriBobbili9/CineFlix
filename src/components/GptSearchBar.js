import React from 'react'
import { useSelector } from 'react-redux'
import { selectedLang } from '../utils/languageConstants'

const GptSearchBar = () => {
    const lang = useSelector(store => store.config.lang)
    console.log(lang,"clsdtf");
    
  return (
    <div className='flex justify-center pt-[10%]'>
    <form className='bg-black w-1/2 grid grid-cols-12'>
    <input className='p-4 m-4 bg-white col-span-9' type="text" placeholder={selectedLang[lang]?.gptSearchPlaceholder}></input>
    <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg text-lg'>{selectedLang[lang]?.search}</button>
    </form>
    </div>
  )
}

export default GptSearchBar