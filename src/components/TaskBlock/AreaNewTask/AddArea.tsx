// import { useState, KeyboardEvent } from 'react';
import { PlusCircle } from "phosphor-react";


export function AddArea() {
  // const [inputText, setInputText] = useState('');
  // const handleKeyUp = (e: KeyboardEvent) => {
  //   if(e.code === 'Enter' && inputText !== '') {
  //     onEnter(inputText)
  //     setInputText('')
  //   }
  // }

  return (
    <div className="pr-3 flex gap-2.5 rounded border border-gray-500 p-4 mb-10">
      <div>
        <PlusCircle size={30} color="#C4C4CC" />
      </div>
      <input
        className="flex-1 bg-transparent outline-none border-0 font-bold text-2xl"
        type="text"
        placeholder="Adicione uma tarefa"
        // value={ inputText }
        // onChange={ e => setInputText(e.target.value) }
        // onKeyUp={ handleKeyUp }
      />
    </div>
  )
}
