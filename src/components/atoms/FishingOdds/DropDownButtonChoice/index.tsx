import React from 'react';
import './DropDownButtonChoice.css'

const DropDownButtonChoice = (props: any) => {

    const [open, setOpen] = React.useState(false);
    
    const DropDownButtonChoiceHandler = () => {

    };
    return (
        <li className="drop-down-button-choice" onClick={DropDownButtonChoiceHandler}>
            <a href="#" className="drop-down-button-choice-text" onClick={()=>setOpen(!open)}>
                {props.text}
            </a>
            {open && props.children}
        </li>
    );
};

export default DropDownButtonChoice;