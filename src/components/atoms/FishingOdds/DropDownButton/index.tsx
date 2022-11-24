import React from 'react';
import WeatherSelector from '../../WeatherSelector';
import DropDownButtonChoice from '../DropDownButtonChoice';
import './DropDownButton.css';

// let LocationData: LocationInterface [] = [];

interface DropDownButtonInterface {
    // dropDownButtonChoice: ,
}

// const DropDownButton = (dropDownButtonChoice: DropDownButtonInterface) => {
    const DropDownButton = ({...props}: any) => {
        // console.log(props)
        // console.log(props.divKey)
        return (
            // <nav className="navbar">
                <div key={props.divKey} className="drop-down-button">
                    {props.children.map((child: any, index: any) => {
                        // console.log(index)
                        return (
                            <DropDownButtonChoice key={index} divKey={index} text={`whatever ${index}`} children={child.props.children} />
                        )
                            // <WeatherSelector />
                        // </div>
                    })}
                </div>
            // </nav>
        );
    };



// // const DropDownButton = (dropDownButtonChoice: DropDownButtonInterface) => {
// const DropDownButton = ({...props}: any) => {
//     console.log(props)
//     return (
//         // <nav className="navbar">
//             <div className="drop-down-button">
//                 {props.children}
//             </div>
//         // </nav>
//     );
// };

export default DropDownButton;