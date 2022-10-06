const FormInputText = ({
  onChange,
  label,
  type,
  name,
  value,
  pattern,
  placeholder,
  errorMessage,
  required,
}) => {
  return (
    <fieldset className='relative mb-2 flex items-center'>
      <label htmlFor={name} className='w-1/2'>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        className='input my-2 w-1/2 p-2 text-center'
        required={required}
      />
      {errorMessage && (
        <span className='text-xs font-medium tracking-wide text-red-500'>
          {errorMessage}
        </span>
      )}
    </fieldset>
  );
};
export default FormInputText;
