import React from "react";
export default function Categories(){
    return(
        <div>
            <ul style={{
                height:"100%",
                border: "1px solid black",
                listStyle:"none",
                display: "flex",
                flexDirection:"column",
                alignItems:"center",
                margin:"0"
            }}>
                <h2>Categories</h2>
                <li>Science</li>
                <li>Art</li>
                <li>Geography</li>
                <li>History</li>
                <li>Entertaiment</li>
                <li>Sports</li>
                <div>
                    <input type="text" placeholder="Search question..."/>
                    <button>Search</button>
                </div>
            </ul>
            
        </div>
    )
}