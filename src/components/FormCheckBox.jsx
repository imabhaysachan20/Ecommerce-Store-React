import React from 'react'

const FormCheckBox = ({size,label,name,defaultValue}) => {
  return (
    
    <div className='form-control items-center'>
        <label htmlFor={name} className='label'>
            <span className='label-text capitalize'>{label}</span>
        </label>
      <input defaultChecked={defaultValue} id = "checkbox" type="checkbox" name = {name} className={`checkbox checkbox-primary ${size}`} />
    </div>
  )
}

export default FormCheckBox
