import React, { useState } from 'react';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);


    const changeTextHandler = () => {
        setChangedText(true)
    }
    return (
        <div>
            {changedText && <p>바뀌었습니다.</p>}
            {!changedText && <p>아직 바뀌기 전입니다.</p>}
            <button onClick={changeTextHandler}>텍스트 바꾸기</button>
        </div>
    );
};

export default Greeting;