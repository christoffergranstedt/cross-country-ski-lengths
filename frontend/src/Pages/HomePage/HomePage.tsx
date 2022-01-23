import React from 'react'
import { SkiLengthForm } from '../../Components/Forms/SkiLengthForm/SkiLengthForm'
import { PageHeading } from '../../Components/PageHeading/PageHeading'
import { SkierInput } from '../../Interfaces/SkierInput'

export const HomePage: React.FC = () => {
	const onFormSubmit = async (skierInput: SkierInput) => {

	}
	
	return (
		<section className="flex justify-center flex-wrap">
			<PageHeading className="w-full text-center my-6" title="Recommended Cross Country Skis Length"/>
			<SkiLengthForm onFormSubmit={onFormSubmit}/>
		</section>
	)
}