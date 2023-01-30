import React, {useState} from 'react';
import Input from "../Input/Input";
import Button from "../Button";

const InputGroup = ({addCase}) => {
    const [text, setText] = useState('')

    return (
        <div>
            <Input text={text} setText={setText}/>
            <Button className='addCaseBtn' disabled={!text} onClick={(e) => {
                e.preventDefault()
                addCase(text)
                setText('')
            }

            }>добавить дело</Button>
        </div>
    );
};

export default InputGroup;