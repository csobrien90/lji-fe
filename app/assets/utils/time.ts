export const isInTheFuture = (epoch: number): boolean => {
	return epoch + 360000 > Date.now()
}