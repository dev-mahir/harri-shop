import { useEffect, useRef, useState } from "react";

const useModal = ({ initialState }) => {
	const ref = useRef(null);
	const [show, setShow] = useState(initialState);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				setShow(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
	}, []);

	return [ref, show, setShow];
};

export default useModal;
