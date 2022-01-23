interface SelectProps {
	name: string
	label: string
	isError: boolean
	errorMessage?: string
	disabled?: boolean
	register: any
  options: string[]
  className?: string
}

export const Select: React.FC<SelectProps> = ({ className, name, label, errorMessage, disabled, isError, register, options }) => {
  return (
    <div className={`${className}`}>
      <label className={`${isError && 'text-red-500'} text-left inline-block w-full text-xl mb-1}`} htmlFor={name}>
        {label}
      </label>
      <select className="w-full h-8 px-3 rounded-sm text-gray-600" disabled={disabled} {...register(name)}>
        {options.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
      <div>
      { isError && <p className="text-red-500 text-lg">{errorMessage}</p>}
      </div>
    </div>
  )
}