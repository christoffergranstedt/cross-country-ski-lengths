import { useForm } from 'react-hook-form'
import { SkierInput } from '../../../Interfaces/SkierInput'
import { Input } from '../Input/Input'

interface SkiLengthProps {
	onFormSubmit: Function
}

export const SkiLengthForm: React.FC<SkiLengthProps> = ({onFormSubmit}) => {
	const { register, handleSubmit } = useForm<SkierInput>()

	const onSubmit = (data: SkierInput) => {
    onFormSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
			<Input className="my-4" label='Username' name="username" register={register}/>
		</form>
  )
}