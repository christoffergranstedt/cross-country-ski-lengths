import React from 'react'
import { toast } from 'react-toastify'
import { SkiLengthForm } from '../../Components/Forms/SkiLengthForm/SkiLengthForm'
import { PageHeading } from '../../Components/PageHeading/PageHeading'
import { HTTPMethod } from '../../Constants/HTTPMethod'
import { useRequest } from '../../Hooks/useRequest'
import { GetRecommendedSkierLengthData } from '../../Interfaces/GetRecommendedSkierLengthData'
import { SkierInput } from '../../Interfaces/SkierInput'

export const HomePage: React.FC = () => {
	const { sendRequest } = useRequest()
	const [recommendedSkiLength, setRecommendedSkiLength] = React.useState<string>('')

	const onFormSubmit = async (skierInput: SkierInput) => {
		try {
			const { data: { recommendedSkiesMinLength, recommendedSkiesMaxLength } } = await sendRequest<GetRecommendedSkierLengthData>({ url: '/api/skiers/get-recommended-ski-lengths', method: HTTPMethod.POST, body: skierInput })
			if (recommendedSkiesMinLength === recommendedSkiesMaxLength) {
				setRecommendedSkiLength(`Your recommended ski length is ${recommendedSkiesMaxLength} cm long`)
			} else {
				setRecommendedSkiLength(`Your recommended ski length is between ${recommendedSkiesMinLength} and ${recommendedSkiesMaxLength} cm long`)
			}
		} catch (error) {
			setRecommendedSkiLength('')
			toast.error('There was an error. Please try again.')
		}
	}
	
	return (
		<section className="flex justify-center flex-wrap">
			<div className="rounded-xl mt-4 sm:mt-12 xl:mt-32">
				<div className="text-center rounded-t-xl bg-green-400 text-gray-800 px-2 sm:px-12 md:px-20 xl:px-24">
					<PageHeading className="w-full py-4" title="Recommended Cross Country Skis Length"/>
				</div>
				<div className="border-l-2 border-r-2 border-b-2 border-white rounded-b-xl px-6">
					<SkiLengthForm className="pt-8" onFormSubmit={onFormSubmit}/>
					<div className="h-20">
						<p className="text-green-400 text-md sm:text-xl md:text-2xl w-full my-8 min-h-8">{recommendedSkiLength}</p>
					</div>
				</div>
			</div>
		</section>
	)
}