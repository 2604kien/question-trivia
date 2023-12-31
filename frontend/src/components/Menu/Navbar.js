import React from "react";
import "../../css/Navbar.css";
export default function Navbar(){
    return (
        <div>
            <ul className="nav--bar">
                <li>Trivia</li>
                <li>List</li>
                <li>Add</li>
                <li>Play</li>
            </ul>
        </div>
    )
}