import React from "react";
import './select.css'
import '../../index.css'

//нужно узнать стили option, и при фокусе
export const Select = ({data=[], setSelected, loaded=false, type, setType, defVal, defValId}) => {

  const handleChange = async(event) => {
    setSelected(event.target.value)
    setType(type)
  }

  return (
    <>
      <select defaultValue={defValId} onChange={handleChange} className='text_grey geoSelect'>
        {defVal ? <option defaultChecked value={defValId}><span>{defVal}</span></option> :
        <option hidden><span>Выбор субъекта...</span></option>}
        {loaded && data.map((item, index) => 
          <option key={index} value={item.id}><span>{item.name}</span></option>
        )}
      </select>
    </>
  )
}