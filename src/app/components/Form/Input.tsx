import { KeyValueCategory } from '@/app/types/category';
import React, { useState } from 'react';
import { useController, Control } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select';
  control: Control<any>;
  name: string;
  rules?: object;
  options?: KeyValueCategory[];
  textChooseOption?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, required,label, type, control, name, rules, options, textChooseOption = "Please choose" }) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  const [isFocus, setIsFocus] = useState(false)
  // console.log(isFocus);

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={id}
            {...field}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${fieldState.error ? 'border-red-500' : ''
              }`}
          />
        );
      case 'select':
        return (
          <select
            id={id}
            {...field}
            className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${fieldState.error ? 'border-red-500' : ''
              }`}
          >
            {options?.map(option => (
              <>
                <option hidden>{textChooseOption}</option>
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              </>
            ))}
          </select>
        );
      default:
        return (
          <input
            // onFocus={() => setIsFocus(true)}
            style={{}}
            type={type}
            id={id}
            {...field}
            className={`bg-gray-50 border 'border-gray-300'  text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 ${fieldState.error ? 'border-red-500' : ''
              }`}

          />
        );
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}{required && <span className='text-red-600'>*</span>}
      </label>
      {renderInput()}
      {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
    </div>
  );
};

export default Input;
