import { useState, forwardRef } from 'react';

import { InputProps } from './types';
import { Eye, EyeClosed } from 'lucide-react';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ errorMessage, ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isPasswordType = props.type === 'password';

  return (
    <>
      <div className="flex rounded-lg border border-black bg-white">
        <input
          className="flex-1 bg-transparent p-2 outline-none"
          {...props}
          ref={ref}
          type={isPasswordType && isPasswordVisible ? 'text' : props.type}
        />
        {isPasswordType && (
          <button
            className="mr-2 cursor-pointer bg-transparent text-black"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <EyeClosed size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {errorMessage && <span className="ml-2 text-sm text-red-400">{errorMessage}</span>}
    </>
  );
});
