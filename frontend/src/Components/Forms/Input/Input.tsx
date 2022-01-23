interface InputProps {
	name: string
  className?: string
	label: string
	type?: string
	disabled?: boolean
	register: any
	isError: boolean
	errorMessage?: string
}

export const Input = ({ name, className, label, type = 'text', errorMessage, disabled, isError, register }: InputProps) => {
  return (
    <div className={`${className}`}>
      <label className={`${isError && 'text-red-500'} text-left inline-block w-full text-xl mb-1`} htmlFor={name}>
        {label}
      </label>
      <input className={`${isError && 'border-2 border-red-500 focus:outline-none'} w-full h-8 px-3 rounded-sm text-gray-600`} type={type} disabled={disabled} {...register(name)} step="1"/>
      <div>
        {isError && <p className="text-red-500 text-lg">{errorMessage}</p>}
      </div>
    </div>
  )
}