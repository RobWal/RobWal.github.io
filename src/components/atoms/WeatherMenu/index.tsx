import React from "react";
import './WeatherMenu.css'

const WeatherMenu = ({ trigger, menu, secondExperiment }: any) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(!open)};
    const experiment = () => {
        // const experiment = (props: any) => {
        // console.log(props.props.children.toLowerCase());
        secondExperiment();
    };
    return (
        <div className="weather-selector"> 
        {React.cloneElement(trigger, {onClick: handleOpen})}
        {open ? (
            <ul className="weather-menu">{menu.map((menuItem: any, index: any) => (
                <li key={index} className="weather-menu-item">
                {React.cloneElement(menuItem, {onClick: () => {
                    experiment();
                    // console.log(menuItem.props);
                    // menuItem.props.onClick();
                    setOpen(false);
                }})}
                </li>
                ))}
            </ul>
        ) : null}
        </div>
    );
};

export default WeatherMenu;