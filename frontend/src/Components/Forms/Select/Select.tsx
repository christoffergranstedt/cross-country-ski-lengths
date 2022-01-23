interface SelectProps {
	name: string
	label: string
	type?: string
	isError: boolean
	errorText?: string
	disabled?: boolean
	register: any
}

export const Select: React.FC<SelectProps> = ({ name, label, type = 'text', errorText, disabled, isError, register }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <input type={type} disabled={disabled} {...register(name)}/>
      <section>
        {isError && <p>{errorText}</p>}
      </section>
    </div>
  )
}