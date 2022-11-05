const FormInput = ({
  onChange,
  label,
  type,
  name,
  id,
  value,
  pattern,
  placeholder,
  errorMessage,
  required,
}) => {
  return (
    <fieldset className='relative mb-2 flex flex-col'>
      <label htmlFor={name} className='w-1/2'>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        className='input my-2 w-full p-2'
        required={required}
      />
      {errorMessage && (
        <span className='text-xs font-medium tracking-wide text-slate-500'>
          {errorMessage}
        </span>
      )}
    </fieldset>
  );
};
export default FormInput;
