import { ErrorMessage } from '@hookform/error-message';
import { useRef } from 'react';
import { useInput } from './useInput';
import { getCurrentDate } from 'helpers';

const TextInput = (props) => {
  const { form } = useInput(props);
  const inputRef = useRef();
  const currentDate = getCurrentDate();

  const focusHandler = () => {
    inputRef.current.type = 'date';
  };

  const { ref, ...rest } = form.register(props.name, {
    onBlur: (e) => (inputRef.current.type = 'text'),
    ...props.rules,
  });

  return (
    <div className='mt-8'>
      <input
        placeholder={props.placeholder}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        onFocus={focusHandler}
        className='w-[32.063rem] h-[3.125rem] px-5 py-[0.625rem] bg-transparent border border-light-black block mb-6 font-HelveticaNeueThin placeholder-light-black text-lg outline-none'
        type='text'
        max={currentDate}
      />
      <p className='font-HelveticaNeueThin text-error-color mt-1 ml-4 h-1'>
        <ErrorMessage errors={form.formState.errors} name={props.name} />
      </p>
    </div>
  );
};

export default TextInput;
