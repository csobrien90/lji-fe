"use client";

import styles from "../assets/styles/Spinner.module.css";

const Spinner = () => {
	return (
		<div className={styles.spinnerWrapper} data-id="spinner">
			<div className={styles.spinner}></div>
		</div>
	)
}

export default Spinner;