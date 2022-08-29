import { IUserEntity } from "../Models/IUserEntity";

function UsersTable(props: any) {


    return (
        <table className="table table-hover table-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date Of Birth</th>
                    <th>Favourite Colour</th>

                </tr>
            </thead>
            <tbody>
                {props.users.map((user :IUserEntity, i:number) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.dob.toLocaleString()}</td>
                        <td>{user.favouriteColour}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        );
}

export default UsersTable;