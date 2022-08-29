import { ITopColoursDto } from "../Models/ITopColoursDto";
import { IUserEntity } from "../Models/IUserEntity";

function ColoursTable(props: any) {


    return (
        <table className="table table-hover table-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Colour</th>
                    <th>Count</th>
                    <th>Favourited By</th>
                </tr>
            </thead>
            <tbody>
                {props.colours.map((colour: ITopColoursDto, i: number) => {

                    var linkedUsers :IUserEntity[] = props.users.filter((user:IUserEntity) => user.favouriteColour == colour.colour)


                    return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{colour.colour}</td>
                        <td>{colour.count}</td>
                        <td>{linkedUsers.map((userToMap: IUserEntity) => { return <div>{userToMap.firstName} {userToMap.lastName} </div>}) }</td>
                    </tr>

                })}
            </tbody>
        </table>
    );
}

export default ColoursTable;