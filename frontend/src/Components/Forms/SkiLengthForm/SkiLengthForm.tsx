import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { SkierInput } from '../../../Interfaces/SkierInput'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { skierInputSchema } from '../../../Validations/SkierInputValidation'
import { Select } from '../Select/Select'
import { TypeOfSki } from '../../../Constants/TypeOfSki'

interface SkiLengthProps {
	className?: string
	onFormSubmit: Function
}

export const SkiLengthForm: React.FC<SkiLengthProps> = ({ className, onFormSubmit }) => {
	const { register, handleSubmit, formState  } = useForm<SkierInput>({ 
		mode: 'onChange',
		resolver: yupResolver(skierInputSchema),
		defaultValues: {
			lengthCm: 0,
			age: 0,
			typeOfSki: TypeOfSki.Classic
		}
	})
	const { errors } = formState

	const onSubmit = (data: SkierInput) => {
    onFormSubmit(data)
	}

  return (
    <form className={`${className || ''} w-[500px]`} onSubmit={handleSubmit(onSubmit)}>
			<Input className="my-4" type="number" label="Skiers length in cm" name="lengthCm" register={register} isError={!!errors.lengthCm} errorMessage={errors.lengthCm ? errors.lengthCm.message : ''} />
			<Input className="my-4" type="number" label="Age" name="age" register={register} isError={!!errors.age} errorMessage={errors.age ? errors.age.message : ''}/>
			<Select className="my-4" label="Type Of Skis" name="typeOfSki" register={register} isError={!!errors.typeOfSki} errorMessage={errors.typeOfSki ? errors.typeOfSki.message : ''} options={[TypeOfSki.Classic, TypeOfSki.Freestyle]}/>
			<Button className="border-2 border-green-400 rounded-md my-4 py-2 px-4 cursor-pointer text-xl hover:bg-green-400 hover:text-gray-800" disabled={!formState.isValid}>Get recommended ski length</Button>
		</form>
  )
}