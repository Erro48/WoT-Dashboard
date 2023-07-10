import React from 'react'
import Breadcrumbs from '../utils/Breadcrumbs'
import Attribute from '../utils/Attribute/Attribute'

const AttributesPanel = ({ affordance }) => {
	if (affordance === undefined) return <></>

	const attributesValues = new Map()

	affordance = {
		...affordance,
		address: `192.168.47.134/aff-type/${affordance.title}`,
	}

	const getAttributes = () => {
		if (!affordance.input) return []

		const attributes = []

		if (affordance.input.properties) {
			if (affordance.input.required) {
				const required = affordance.input.required
				affordance.input.properties[required].required = true
			}

			attributes.push(...Object.values(affordance.input.properties))
		} else {
			attributes.push(affordance.input)
		}

		return attributes
	}

	const handleAttributeChange = (title, value) => {
		attributesValues.set(title, value)
	}

	const submitRequest = (e) => {
		e.preventDefault()
		console.log(attributesValues)
	}

	return (
		<section className='col col-sm-12 px-0'>
			<header>
				<h2>{affordance.title}</h2>
				<p className='subtitle'>{affordance.address}</p>
			</header>
			<Breadcrumbs />
			<section className='row px-2'>
				<div className='col-12 col-sm-7 mb-3 mb-sm-0'>
					<ul className='m-0 attributes-list overflow-auto'>
						{getAttributes().map((attribute) => (
							<li>
								<Attribute
									attribute={attribute}
									onChange={handleAttributeChange}
								/>
							</li>
						))}
					</ul>
				</div>
			</section>
			<footer>
				<button
					type='button'
					className='button primary-btn'
					onClick={submitRequest}
				>
					Submit
				</button>
			</footer>
		</section>
	)
}

export default AttributesPanel
