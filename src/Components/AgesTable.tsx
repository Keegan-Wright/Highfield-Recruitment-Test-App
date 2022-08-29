import { debug } from "util";
import { IAgePlusTwentyDto } from "../Models/IAgePlusTwentyDto";
import { IUserEntity } from "../Models/IUserEntity";

function AgesTable(props: any) {


    return (
        <table className="table table-hover table-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>User Id</th>
                    <th>Original Age</th>
                    <th>Age Plus Twenty</th>
                    <th>User Information</th>
                </tr>
            </thead>
            <tbody>
                {props.ages.map((age: IAgePlusTwentyDto, i: number) => {

                    var linkedUser: IUserEntity = props.users.filter((user: IUserEntity) => user.id == age.userId)[ 0 ];

                   return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{age.userId}</td>
                        <td>{age.originalAge}</td>
                       <td>{age.agePlusTwenty}</td>
                       <td><div>{linkedUser.firstName} {linkedUser.lastName} {linkedUser.dob.toLocaleString() }</div></td>
                    </tr>
                })}
            </tbody>
        </table>    );
}

export default AgesTable;