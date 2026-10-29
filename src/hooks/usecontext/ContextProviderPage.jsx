
import { FnContextCreate } from "./ContextCreatePage";
import { ContextPage } from "./ContextPage";

export const FnContextProvider = ({pagetitle}) => {
    //01. Variable data can be provided by creating a variable with a value.
    //02. Object data can be provided by creating an object with properties and values.
    //03. Array data can be provided by creating an array of objects with properties and values.
    
    //01
    const myName = "Santosh Bole";
    const myAge = 38;
    //02
    const userdata = { myName: "Vishal Patil", myAge: "35" };
    //03
    const userArray = [
        { myName: "Vishal Patil", myAge: "35" },
        { myName: "Santosh Bole", myAge: "38" },
        { myName: "Ramesh Patil", myAge: "40" }
    ];

    return (
        <FnContextCreate.Provider value={{ myName, myAge, userdata, userArray }}>
            <ContextPage pagetitle={pagetitle} />
        </FnContextCreate.Provider>
    );
};
