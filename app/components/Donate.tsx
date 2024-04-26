import Script from 'next/script'

const Donate = async () => {
	const widgetUrl ='https://secure.givelively.org/widgets/simple_donation/louisville-jazz-initiative-inc.js?show_suggested_amount_buttons=false&show_in_honor_of=false&address_required=false&has_required_custom_question=null';
	return (
		<>
			<Script src={widgetUrl} />
			<div id="give-lively-widget" className="gl-simple-donation-widget"></div>
		</>
	)
}

export default Donate