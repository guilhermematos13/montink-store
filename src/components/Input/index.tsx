import { useState, forwardRef, ChangeEvent } from 'react';

import { InputProps } from './types';
import { Eye, EyeClosed } from 'lucide-react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, type = 'text', ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const isPasswordType = type === 'password';
    const isCepType = type === 'cep';

    const formatCEP = (value: string) => {
      const digits = value.replace(/\D/g, '').slice(0, 8);
      if (digits.length <= 5) return digits;
      return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value;

      if (isCepType) {
        val = formatCEP(val);
        setInputValue(val);
      } else {
        setInputValue(val);
      }

      if (props.onChange) {
        const event = {
          ...e,
          target: { ...e.target, value: val },
        };
        props.onChange(event as ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <>
        <div className="flex rounded-lg border border-black bg-white">
          <input
            {...props}
            ref={ref}
            type={isPasswordType && isPasswordVisible ? 'text' : isCepType ? 'text' : type}
            className="flex-1 bg-transparent p-2 outline-none"
            onChange={handleChange}
            value={inputValue}
            maxLength={isCepType ? 9 : undefined}
          />
          {isPasswordType && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="mr-2 cursor-pointer bg-transparent text-black"
            >
              {isPasswordVisible ? <EyeClosed size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        {errorMessage && <span className="ml-2 text-sm text-red-400">{errorMessage}</span>}
      </>
    );
  },
);
