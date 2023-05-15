const Copyright = (props: any) => {
	console.log(props)
	const thisYear: Date = new Date()
	return (
		<p>&#169; Copyright {thisYear.toLocaleDateString(undefined, {year: 'numeric'})} - Louisville Jazz Initiative</p>
	)
}

export default Copyright