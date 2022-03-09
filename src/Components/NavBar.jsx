import React from 'react'
import { NavLink} from 'react-router-dom'





 export default function NavBar(){
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <NavLink to = {"/Home"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = {'/Users'}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to = {'./Create'}>Create User</NavLink>
                    </li>
                    <li>
                        <NavLink to = {'./About'}> About</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
        
    )


}
