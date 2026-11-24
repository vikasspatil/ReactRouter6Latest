
import { useEffect, useState } from "react";
import { FnContextCreate } from "./ContextCreatePage";
import { ContextPage } from "./ContextPage";

export const FnContextProvider = ({pagetitle}) => {
    const [usersfromapi, setUsersFromApi] = useState([]);
    
    //01. Variable data can be provided by creating a variable with a value.
    //02. Object data can be provided by creating an object with properties and values.
    //03. Array data can be provided by creating an array of objects with properties and values.
    //04. API data.
    
    //01
    const myName = "Vijay Patil";
    const myAge = 56;
    const village = "Latur";
    //02
    const userdata = { myName: "Santosh Lohar", myAge: "35", village: "Pune" };
    //03
    const userArray = [
        { myName: "Vishal Patil", myAge: "35", village: "Sangli" },
        { myName: "Santosh Bole", myAge: "38", village: "Rajapur" },
        { myName: "Ramesh Patil", myAge: "40", village: "Satara" }
    ];
    //04
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => {
            setUsersFromApi(data);
        }).catch((error)=>{
            console.log("API Error: ", error)
        })
    }, []);

    return (
        <FnContextCreate.Provider value={{ myName, myAge, village, userdata, userArray, usersfromapi }}>
            <ContextPage pagetitle={pagetitle} />
        </FnContextCreate.Provider>
    );
};
