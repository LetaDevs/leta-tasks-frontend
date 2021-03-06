import {useState} from 'react';

const useForm = (initialState = {}) => {
	const [formValues, setFormValues] = useState(initialState);

	const handleInputChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const resetForm = () => {
		setFormValues(initialState);
	};

	return [formValues, setFormValues, handleInputChange, resetForm];
};

export default useForm;
