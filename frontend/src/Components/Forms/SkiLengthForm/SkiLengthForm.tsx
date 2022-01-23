import { useForm } from 'react-hook-form'
import { SkierInput } from '../../../Interfaces/SkierInput'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

interface SkiLengthProps {
	className?: string
	onFormSubmit: Function
}

export const SkiLengthForm: React.FC<SkiLengthProps> = ({ className, onFormSubmit }) => {
	const { register, handleSubmit } = useForm<SkierInput>()

	const onSubmit = (data: SkierInput) => {
    onFormSubmit(data)
  }

  return (
    <form className={`${className || ''} w-[800px]`} onSubmit={handleSubmit(onSubmit)}>
			<Input className="my-4" type="number" label="Length in CM" name="lengthCm" register={register}/>
			<Input className="my-4" type="number" label="Age" name="age" register={register}/>
			<Input className="my-4" type="text" label="Type Of Skies" name="typeOfSkies" register={register}/>
			<Button className="border-2 border-green-400 rounded-md py-2 px-4">Get recomended ski length</Button>
		</form>
  )
}