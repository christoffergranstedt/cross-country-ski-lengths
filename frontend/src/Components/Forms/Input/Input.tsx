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
      <label className="text-left inline-block w-24" htmlFor={name}>
        {label}
      </label>
      <input className="w-full h-8 px-3 rounded-md text-gray-600 focus:ring-2 focus:ring-red-600" type={type} disabled={disabled} {...register(name)} step="1"/>
      <section>
        {isError && <p>{errorMessage}</p>}
      </section>
    </div>
  )
}