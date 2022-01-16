import React from 'react';
// import {NavLink} from 'react-router-dom';

// const Header =() =>(

//     <header>
//         <h1>Generic Routing App</h1>
//         <NavLink 
//             to="/" 
//             className={({ isActive }) =>isActive ? "is-active" : undefined}
//         >
//             Dashboard
//         </NavLink>
//         <NavLink 
//             to="/edit"
//             className={({ isActive }) =>isActive ? "is-active" : undefined}
//         >
//             Edit Expense
//         </NavLink>
//         <NavLink
//             to="/help" 
//             className={({ isActive }) =>isActive ? "is-active" : undefined}>
//             Help Page
//         </NavLink>
//     </header>
// );

// export default Header;

const Header = (props) =>(
    <div className="header">
        <div className="container">
            <h1 className='header__title'> {props.title} </h1>
            {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps ={
    title: 'Beer Recommendation Tool'
};

export default Header;