import { useForm } from 'react-hook-form'
import { SkierInput } from '../../../Interfaces/SkierInput'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TypeOfSki } from '../../../Constants/TypeOfSki'

const schema = yup.object({
  lengthCm: yup.number().min(0).max(300).required(),
  age: yup.number().min(0).max(300).required(),
	typeOfSki: yup.string().oneOf([TypeOfSki.Classic, TypeOfSki.Freestyle]).required()
}).required()

interface SkiLengthProps {
	className?: string
	onFormSubmit: Function
}

export const SkiLengthForm: React.FC<SkiLengthProps> = ({ className, onFormSubmit }) => {
	const { register, handleSubmit, formState: { errors } } = useForm<SkierInput>({ resolver: yupResolver(schema)})

	const onSubmit = (data: SkierInput) => {
    onFormSubmit(data)
  }

  return (
    <form className={`${className || ''} w-[800px]`} onSubmit={handleSubmit(onSubmit)}>
			<Input className="my-4" type="number" label="Length in CM" name="lengthCm" register={register} isError={!!errors.lengthCm} errorMessage={errors.lengthCm ? errors.lengthCm.message : ''} />
			<Input className="my-4" type="number" label="Age" name="age" register={register} isError={!!errors.age} errorMessage={errors.age ? errors.age.message : ''}/>
			<Input className="my-4" type="text" label="Type Of Skies" name="typeOfSki" register={register} isError={!!errors.typeOfSki} errorMessage={errors.typeOfSki ? errors.typeOfSki.message : ''}/>
			<Button className="border-2 border-green-400 rounded-md py-2 px-4">Get recommended ski length</Button>
		</form>
  )
}