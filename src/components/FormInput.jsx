const FormInput = (props) => {
  const { onChange, label, type, name, value, pattern, placeholder } = props;
  return (
    <fieldset className='flex items-center'>
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
        className='my-2 w-2/3 p-2'
      />
    </fieldset>
  );
};
export default FormInput;
