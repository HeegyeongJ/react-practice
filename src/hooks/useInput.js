import React, { useState } from 'react';

const useInput = (validateValue) => { // Name 과 관련된 부분으로 만든 커스텀 훅
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    // enteredValue.trim() !== ''; 유효성 로직이 다르기 때문에 props에서 로직을 받아와서 검사할 수 있도록
    const hasError = !valueIsValid && isTouched;

    const valueInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const valueInputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue, // 이름을 줄여서 깔끔하게 사용할 수 있게 넘겨주기 
        isValid: valueIsValid, 
        hasError, 
        valueInputChangeHandler, 
        valueInputBlurHandler, 
        reset,
    };
};

export default useInput;