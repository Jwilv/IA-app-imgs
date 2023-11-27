import React from 'react'

interface Props {
  labelName: string,
  type: string,
  name: string,
  placeholder: string,
  value: string,
  handleChange: any,
  isSurpriseMe?: boolean,
  handleSurpriseMe?: any
}

const FormField = (field: Props) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={field.name} className='block text-sm font-medium text-gray-900'>
          {field.labelName}
        </label>
        {field.isSurpriseMe && (
          <button
            type='button'
            onClick={field.handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={field.type}
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        value={field.value}
        onChange={field.handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField