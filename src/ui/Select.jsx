function Select({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((option) => (
          <option
            className="bg-primary-100 text-slate-500"
            key={option._id}
            value={option._id}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
