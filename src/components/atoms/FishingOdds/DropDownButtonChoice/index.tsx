import React from 'react';
import './DropDownButtonChoice.css'

interface DropDownButtonChoiceInterface {
    divKey: number,
    text: string,
    children: JSX.Element[],
};

const DropDownButtonChoice = ({divKey, text, children}: DropDownButtonChoiceInterface) => {
    // console.log(props);

    const [open, setOpen] = React.useState(false);
    
    const DropDownButtonChoiceHandler = () => {

    };
    // console.log(`I am inside ${text} and my key is ${divKey}`);
    // console.log(children)
    return (
        <div key={divKey} className="drop-down-button-choice" onClick={()=>setOpen(!open)}>
            <p className="drop-down-button-choice-text" onClick={()=>setOpen(!open)}>
                {text}{divKey}
            </p>
            {open && children}
            {/* .map((child: any, index: any) => {
                // console.log(child);
                })} */}
        </div>
    );
};

export default DropDownButtonChoice;