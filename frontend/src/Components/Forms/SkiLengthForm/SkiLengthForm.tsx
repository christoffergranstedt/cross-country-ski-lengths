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
		mode: 'onBlur',
		resolver: yupResolver(skierInputSchema)
	})
	const { errors } = formState

	const onSubmit = (data: SkierInput) => {
    onFormSubmit(data)
	}

  return (
    <form className={`${className || ''}`} onSubmit={handleSubmit(onSubmit)}>
			<Input 
				className="mb-4" 
				type="number" 
				label="Skiers length in cm" 
				name="lengthCm" register={register} 
				isError={!!errors.lengthCm} 
				errorMessage={errors.lengthCm ? errors.lengthCm.message : ''} 
			/>
			<Input 
				className="my-4" 
				type="number" 
				label="Age" 
				name="age" 
				register={register} 
				isError={!!errors.age} 
				errorMessage={errors.age ? errors.age.message : ''}
			/>
			<Select 
				className="my-4" 
				label="Type of skis" 
				name="typeOfSki" 
				register={register} 
				isError={!!errors.typeOfSki} 
				errorMessage={errors.typeOfSki ? errors.typeOfSki.message : ''} 
				options={[TypeOfSki.Classic, TypeOfSki.Freestyle]}
			/>
			<Button 
				className="border-2 border-green-400 rounded-md my-4 py-2 px-4 cursor-pointer text-sm sm:text-lg m:text-xl disabled:border-gray-600 disabled:bg-gray-800 hover:bg-green-400" 
				disabled={!formState.isValid}>Get recommended ski length</Button>
		</form>
  )
}