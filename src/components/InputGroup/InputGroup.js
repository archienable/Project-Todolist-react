import React, {useState} from 'react';
import Input from "../Input/Input";
import DefButton from "../Button";
import './InputGroup.css'

const InputGroup = ({addCase}) => {
    const [text, setText] = useState('')

    return (
        <div className='InputGroup'>
            <Input className='addInput' text={text} setText={setText} placeholder='введите текст' />
            <DefButton color={'secondary'} className='addCaseBtn' disabled={!text} onClick={(e) => {
                e.preventDefault()
                addCase(text)
                setText('')
            }
            }>добавить дело</DefButton>
        </div>
    );
};

export default InputGroup;