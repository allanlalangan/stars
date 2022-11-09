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
    <fieldset
      className={`${
        name === 'birth_date' || name === 'birth_time' ? 'lg:w-1/2' : ''
      } relative mb-2 flex flex-col`}
    >
      <label
        htmlFor={name}
        className='w-full font-heading text-sm font-semibold'
      >
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
        className={`input ${
          (name === 'birth_date' && 'lg:mr-1') ||
          (name === 'birth_time' && 'lg:ml-1')
        } rounded border border-primary-800 p-2`}
        required={required}
      />
      {/* {errorMessage && (
        <span className='text-xs font-medium tracking-wide text-slate-500'>
          {errorMessage}
        </span>
      )} */}
    </fieldset>
  );
};
export default FormInput;
