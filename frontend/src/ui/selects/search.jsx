import React from "react";
import './select.css'
import '../../index.css'

//нужно узнать стили option, и при фокусе
export const Select = () => {

  return (
    <>
      <select className='text_grey'>
        <option>
          <span >
            Выбор субъекта...
          </span>
        </option>
      </select>
    </>
  )
}