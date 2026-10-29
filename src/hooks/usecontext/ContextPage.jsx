
import { useContext } from "react";
import { FnContextCreate } from "./ContextCreatePage";

export const ContextPage = ({pagetitle}) => {
    const user = useContext(FnContextCreate);

    if (!user) {
        return <p>Context Provider is missing.</p>;
    }

    return (
        <>
            <h1 className="page-title">{pagetitle}</h1>

            <p>
                <strong>Veriable Data:</strong> <br />
                My name is {user.myName} and I am {user.myAge} years old.
            </p>
            <p>
                <strong>Object Data:</strong> <br />                
                My friend's name is {user.userdata.myName} and I am {user.userdata.myAge} years old.
            </p>
            <strong>Array Data:</strong> <br />
            <ul>                
                {user.userArray.map((user, index) => (
                    <li key={index}>
                        {user.myName} is {user.myAge} years old.
                    </li>
                ))}
            </ul>
        </>
    );
};
