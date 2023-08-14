import { LogoProps } from "@/types"

const Logo = ({ size, color }: LogoProps): JSX.Element => {
	return (
		<div className={`logo logo-${size}`}>
			<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188.96 93.44">
				<g>
					<path style={{fill: color}} d="M13.18,25.57v-4.18s27.61,.09,27.61,.09v4.18c-2.75,0-4.57,.4-5.48,1.22-.91,.82-1.36,2.49-1.37,5l-.12,36.58c-.02,5.25-.57,9.32-1.64,12.23s-3.23,5.29-6.48,7.15c-3.24,1.86-7.33,2.78-12.24,2.76-4.02-.01-7.27-.71-9.74-2.08C1.23,87.15,0,85.3,0,82.96c0-1.66,.67-2.98,1.97-3.98,1.31-1,2.86-1.5,4.64-1.49s3.11,.42,4.14,1.26c1.02,.83,1.54,1.96,1.54,3.39,0,.43-.11,.98-.31,1.66-.13,.4-.19,.7-.19,.9,0,1.15,.95,1.73,2.85,1.74,2.14,0,3.64-.93,4.51-2.81,.88-1.88,1.32-5.79,1.34-11.74l.14-40.05c0-2.33-.38-3.96-1.17-4.88-.79-.92-2.44-1.38-4.95-1.39h-1.31Z"/>
					<path style={{fill: color}} d="M50.41,58.78l-.98,2.52c-.71,1.78-1.06,3.03-1.07,3.76,0,1.23,.4,2.09,1.23,2.58,.83,.5,2.18,.74,4.06,.75v4.18s-16.88-.06-16.88-.06v-4.18c3.22,.01,5.93-2.71,8.14-8.18l15.83-39.5h4.4s15.87,39.59,15.87,39.59c1.57,3.92,2.99,6.28,4.27,7.07,1.28,.8,2.51,1.2,3.68,1.2v4.18s-25.35-.09-25.35-.09v-4.18c2.3,0,3.72-.21,4.27-.65,.56-.44,.83-.99,.83-1.67,0-.6-.22-1.39-.67-2.37l-.49-1.17-1.45-3.73-15.7-.05Zm1.64-4.32l12.38,.04-6.31-15.27-6.07,15.22Z"/>
					<path style={{fill: color}} d="M92.54,72.7v-3.35s28.8-43.11,28.8-43.11l-8.28-.03c-5.3-.02-8.8,.51-10.51,1.6-1.71,1.08-3.18,3.57-4.43,7.45h-4.03s.84-13.6,.84-13.6l42.95,.15v3.43s-29.03,43.04-29.03,43.04l11.71,.04c3.26,.01,5.67-.28,7.23-.88,1.56-.6,2.95-1.69,4.19-3.28,1.24-1.59,2.28-3.76,3.14-6.52h4.26s-.96,15.22-.96,15.22l-45.88-.16Z"/>
					<path style={{fill: color}} d="M142.13,72.87v-3.35s28.8-43.11,28.8-43.11l-8.28-.03c-5.3-.02-8.8,.51-10.51,1.6-1.71,1.08-3.18,3.57-4.43,7.45h-4.03s.84-13.6,.84-13.6l42.95,.15v3.43s-29.03,43.04-29.03,43.04l11.71,.04c3.26,.01,5.67-.28,7.23-.88,1.56-.6,2.95-1.69,4.19-3.28,1.24-1.59,2.28-3.76,3.14-6.52h4.26s-.96,15.22-.96,15.22l-45.88-.16Z"/>
				</g>
				<g>
					<path style={{fill: color}} d="M13.84,.26h1.81s-.04,11.67-.04,11.67l6.13,.02v1.7s-7.95-.03-7.95-.03l.05-13.36Z"/>
					<path style={{fill: color}} d="M37.96,14.04c-1.02,0-1.96-.19-2.81-.55s-1.58-.86-2.19-1.49c-.61-.63-1.08-1.38-1.43-2.23-.34-.86-.51-1.78-.51-2.77s.18-1.92,.53-2.77,.83-1.59,1.44-2.22c.61-.63,1.35-1.12,2.2-1.47C36.05,.17,36.99,0,38.01,0s1.96,.19,2.81,.55c.85,.36,1.59,.86,2.19,1.49s1.08,1.38,1.43,2.23c.34,.86,.51,1.78,.51,2.78,0,.99-.18,1.92-.53,2.77-.35,.86-.83,1.6-1.44,2.22s-1.35,1.12-2.2,1.47-1.79,.53-2.81,.53Zm0-1.7c.77,0,1.46-.14,2.08-.42s1.15-.66,1.59-1.14c.44-.48,.78-1.04,1.03-1.69s.36-1.34,.37-2.07-.11-1.42-.35-2.07-.57-1.21-1.01-1.69c-.44-.48-.97-.86-1.58-1.15-.62-.29-1.31-.43-2.07-.43s-1.46,.14-2.08,.42c-.62,.28-1.15,.66-1.59,1.14-.44,.48-.78,1.04-1.03,1.69-.24,.65-.36,1.34-.37,2.07s.11,1.42,.35,2.07c.24,.65,.58,1.21,1.01,1.69,.44,.48,.97,.86,1.58,1.15s1.31,.43,2.08,.43Z"/>
					<path style={{fill: color}} d="M56.23,.4l-.03,8.19c0,.41,.05,.85,.16,1.29,.11,.45,.3,.86,.56,1.24,.26,.38,.61,.69,1.03,.93,.43,.24,.95,.36,1.58,.36s1.16-.12,1.59-.35c.43-.24,.77-.55,1.04-.92,.27-.38,.46-.79,.57-1.23,.11-.45,.17-.88,.17-1.29l.03-8.19h1.81s-.03,8.48-.03,8.48c0,.78-.14,1.49-.4,2.12s-.63,1.18-1.1,1.65-1.02,.82-1.65,1.07-1.31,.37-2.04,.37-1.41-.13-2.04-.38-1.17-.61-1.64-1.08c-.46-.47-.83-1.02-1.09-1.65s-.39-1.34-.39-2.13l.03-8.47h1.81Z"/>
					<path style={{fill: color}} d="M77.36,.47h1.81s-.05,13.37-.05,13.37h-1.81s.05-13.37,.05-13.37Z"/>
					<path style={{fill: color}} d="M91.21,11.09c.32,.49,.74,.86,1.25,1.09,.51,.24,1.03,.35,1.57,.35,.3,0,.61-.04,.93-.14,.31-.09,.6-.23,.86-.42,.26-.19,.47-.42,.64-.7,.16-.28,.25-.6,.25-.96,0-.52-.16-.91-.49-1.18-.33-.27-.73-.5-1.22-.68-.48-.18-1.01-.36-1.58-.53-.57-.17-1.1-.41-1.58-.71-.48-.3-.89-.71-1.21-1.22-.33-.51-.49-1.2-.48-2.07,0-.39,.09-.8,.26-1.24,.17-.44,.44-.84,.81-1.2s.84-.67,1.41-.91c.57-.24,1.26-.36,2.07-.36,.73,0,1.43,.11,2.09,.31,.67,.2,1.25,.61,1.75,1.23l-1.48,1.33c-.23-.35-.54-.64-.96-.85-.41-.21-.89-.32-1.41-.33s-.92,.06-1.26,.19-.6,.3-.8,.51c-.2,.21-.34,.43-.43,.67-.08,.24-.12,.46-.13,.66,0,.57,.16,1,.49,1.3,.33,.3,.73,.55,1.22,.74,.48,.19,1.01,.36,1.58,.52,.57,.15,1.1,.36,1.58,.64s.89,.64,1.21,1.1c.33,.46,.49,1.09,.48,1.9,0,.64-.13,1.22-.37,1.73s-.58,.95-1,1.3c-.42,.35-.91,.62-1.47,.81-.57,.19-1.17,.28-1.81,.28-.86,0-1.67-.16-2.43-.46-.77-.31-1.38-.77-1.83-1.4l1.5-1.28Z"/>
					<path style={{fill: color}} d="M107.76,.58h2.09s3.89,10.89,3.89,10.89h.04S117.89,.61,117.89,.61h1.98s-5.31,13.35-5.31,13.35h-1.7S107.76,.58,107.76,.58Z"/>
					<path style={{fill: color}} d="M129.72,.65h1.81s-.05,13.37-.05,13.37h-1.81s.05-13.37,.05-13.37Z"/>
					<path style={{fill: color}} d="M143.22,.7h1.81s-.04,11.67-.04,11.67l6.13,.02v1.7s-7.95-.03-7.95-.03l.05-13.36Z"/>
					<path style={{fill: color}} d="M161.26,.76h1.81s-.04,11.67-.04,11.67l6.13,.02v1.7s-7.95-.03-7.95-.03l.05-13.36Z"/>
					<path style={{fill: color}} d="M179.3,.82l8.62,.03v1.7s-6.82-.02-6.82-.02v3.98s6.33,.02,6.33,.02v1.7s-6.35-.02-6.35-.02v4.28s7.14,.02,7.14,.02v1.7s-8.97-.03-8.97-.03l.05-13.36Z"/>
				</g>
				<g>
					<path style={{fill: color}} d="M36.66,80.65h1.66s-.04,12.28-.04,12.28h-1.66s.04-12.28,.04-12.28Z"/>
					<path style={{fill: color}} d="M49.06,80.7h2.18s6.73,10.12,6.73,10.12h.04s.03-10.09,.03-10.09h1.66s-.04,12.28-.04,12.28h-2.12s-6.8-10.12-6.8-10.12h-.04s-.03,10.09-.03,10.09h-1.66s.04-12.28,.04-12.28Z"/>
					<path style={{fill: color}} d="M70.44,80.77h1.66s-.04,12.28-.04,12.28h-1.66s.04-12.28,.04-12.28Z"/>
					<path style={{fill: color}} d="M85.39,82.38h-3.95s0-1.57,0-1.57l9.57,.03v1.56s-3.96-.01-3.96-.01l-.04,10.71h-1.66s.04-10.72,.04-10.72Z"/>
					<path style={{fill: color}} d="M100.36,80.87h1.66s-.04,12.28-.04,12.28h-1.66s.04-12.28,.04-12.28Z"/>
					<path style={{fill: color}} d="M116.6,80.93h1.51s5.21,12.3,5.21,12.3h-1.94s-1.22-3.04-1.22-3.04l-5.84-.02-1.22,3.03h-1.94s5.45-12.26,5.45-12.26Zm2.96,7.79l-2.27-5.64h-.04s-2.34,5.63-2.34,5.63l4.65,.02Z"/>
					<path style={{fill: color}} d="M133.5,82.54h-3.95s0-1.57,0-1.57l9.57,.03v1.56s-3.96-.01-3.96-.01l-.04,10.71h-1.66s.04-10.72,.04-10.72Z"/>
					<path style={{fill: color}} d="M148.47,81.03h1.66s-.04,12.28-.04,12.28h-1.66s.04-12.28,.04-12.28Z"/>
					<path style={{fill: color}} d="M159.18,81.07h1.92s3.57,10.01,3.57,10.01h.04s3.78-9.97,3.78-9.97h1.82s-4.88,12.26-4.88,12.26h-1.56s-4.69-12.3-4.69-12.3Z"/>
					<path style={{fill: color}} d="M179.36,81.14l7.92,.03v1.56s-6.26-.02-6.26-.02v3.66s5.81,.02,5.81,.02v1.56s-5.83-.02-5.83-.02v3.94s6.56,.02,6.56,.02v1.56s-8.24-.03-8.24-.03l.04-12.27Z"/>
				</g>
			</svg>
		</div>
	)
}

export default Logo