import React from 'react'
import { SkiLengthForm } from '../../Components/Forms/SkiLengthForm/SkiLengthForm'
import { SkierInput } from '../../Interfaces/SkierInput'

export const HomePage: React.FC = () => {
	const onFormSubmit = async (skierInput: SkierInput) => {

	}
	
	return (
		<section className="flex justify-center">
			<SkiLengthForm onFormSubmit={onFormSubmit}/>
		</section>
	)
}