import React from 'react';
import DropDownButtonChoice from '../../../atoms/FishingOdds/DropDownButtonChoice';
import './DropDownButton.css';

// let LocationData: LocationInterface [] = [];


const DropDownButton = (props: any) => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {setOpen(!open)};


    // const showDropDownMenu = (prop: string) => {

    // }
    // console.log(array);
    return (
        <nav className="navbar">
            <ul className="drop-down-button">{props.children}</ul>
        </nav>
    );
};

export default DropDownButton;