import React from 'react'
import { SkiLengthForm } from '../../Components/Forms/SkiLengthForm/SkiLengthForm'
import { PageHeading } from '../../Components/PageHeading/PageHeading'
import { HTTPMethod } from '../../Constants/HTTPMethod'
import { useRequest } from '../../Hooks/useRequest'
import { SkierInput } from '../../Interfaces/SkierInput'

export const HomePage: React.FC = () => {
	const { sendRequest } = useRequest()

	const onFormSubmit = async (skierInput: SkierInput) => {
		try {
			sendRequest({ url: '/api/skiers/get-recommended-ski-lengths', method: HTTPMethod.POST, body: skierInput })
		} catch (error) {
			console.log(error) // TODO
		}
	}
	
	return (
		<section className="flex justify-center flex-wrap">
			<PageHeading className="w-full text-center my-6" title="Recommended Cross Country Skis Length"/>
			<SkiLengthForm onFormSubmit={onFormSubmit}/>
		</section>
	)
}