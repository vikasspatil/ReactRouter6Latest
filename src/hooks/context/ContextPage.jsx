
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
                My name is {user.myName} and I am {user.myAge} years old. And I am from {user.village}.
            </p>
            <p>
                <strong>Object Data:</strong> <br />                
                My friend's name is {user.userdata.myName} and I am {user.userdata.myAge} years old. And he is from {user.userdata.village}.
            </p>
            <strong>Array Data:</strong> <br />
            <ul>
                {user.userArray && user.userArray.length > 0 ? (
                    user.userArray.map((user, index) => (
                        <li key={index}>
                            {user.myName} is {user.myAge} years old. And he is from {user.village}
                        </li>
                    ))
                    ) : (
                        <li>No data available</li>
                    )
                }                
            </ul>
            <strong>API Data:</strong> <br />
            {console.log(user.usersfromapi)}
            <table width="100%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>                        
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {user.usersfromapi && user.usersfromapi.length > 0 ? (
                        user.usersfromapi.map((user, index) => (
                            <tr key={user.id || index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`} style={{ color: "blue" }}>
                                        {user.email}
                                    </a>
                                </td>
                                <td>
                                    {user.address.street} <br />
                                    {user.address.suite} <br />
                                    {user.address.city}
                                </td>
                                <td>{user.company.name}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};
