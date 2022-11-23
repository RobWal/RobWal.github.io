import './DropDown.css';
import React from "react";

const DropDown = () => {
    const handleMenuOne = () => {
      console.log('clicked one');
    };
  
    const handleMenuTwo = () => {
      console.log('clicked two');
    };
  
    return (
      	<Dropdown trigger={<button>Dropdown</button>} 
		  menu={[<button className="location1" onClick={handleMenuOne}>Menu 1</button>,<button className="location2" onClick={handleMenuTwo}>Menu 2</button>]}/>
    );
};
  
const Dropdown = ({ trigger, menu }: any) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {setOpen(!open)};

	return (
		<div className="dropdown"> {React.cloneElement(trigger, {onClick: handleOpen})}
		{open ? (
			<ul className="menu">{menu.map((menuItem: any, index: any) => (
				<li key={index} className="menu-item">
				{React.cloneElement(menuItem, {onClick: () => {
					menuItem.props.onClick();
					setOpen(false);
				}})}
				</li>
				))}
			</ul>
		) : null}
		</div>
	);
};
export default DropDown;