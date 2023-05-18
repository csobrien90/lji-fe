import { LogoProps } from "@/types"

const Logo = ({ size }: LogoProps) => {
	return (
		<img src='' className={`logo-${size}`}></img>
	)
}

export default Logo