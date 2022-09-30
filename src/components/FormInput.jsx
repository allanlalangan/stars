const FormInput = (props) => {
  const {
    onChange,
    label,
    type,
    name,
    value,
    pattern,
    placeholder,
    errorMessage,
    required,
  } = props;
  return (
    <fieldset className='relative flex items-center py-4'>
      <label htmlFor={name} className='w-1/3'>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        className='input my-2 w-2/3 p-2'
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
export default FormInput;
