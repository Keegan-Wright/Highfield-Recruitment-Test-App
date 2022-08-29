import React from 'react';

import { IAgePlusTwentyDto } from '../../Models/IAgePlusTwentyDto';
import { ITopColoursDto } from '../../Models/ITopColoursDto';
import { IUserEntity } from '../../Models/IUserEntity';
import { ApiService } from '../../Services/ApiService';

import  ColoursTable  from '../../Components/ColoursTable'
import AgesTable from '../../Components/AgesTable'
import UsersTable from '../../Components/UsersTable';
import LoadingSpinner from '../../Components/LoadingSpinner';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

function App() {


    const defaultUsers: IUserEntity[] = [];
    const defaultAges: IAgePlusTwentyDto[] = [];
    const defaultColours: ITopColoursDto[] = [];

    const [ users, setUsers ]: [ IUserEntity[], (posts: IUserEntity[]) => void ] = React.useState(defaultUsers);
    const [ ages, setAges ]: [ IAgePlusTwentyDto[], (posts: IAgePlusTwentyDto[]) => void ] = React.useState(defaultAges);
    const [ colours, setColours ]: [ ITopColoursDto[], (posts: ITopColoursDto[]) => void ] = React.useState(defaultColours);

    const [ loading, setLoading ]: [ boolean, (loading: boolean) => void ] = React.useState<boolean>(true);


    React.useEffect(() => {
        ApiService.GetUsers().then(response => {
            setUsers(response.users);
            setAges(response.ages);
            setColours(response.topColours);
            setLoading(false);
        })
    }, []);




    return (
        <div className="App">

            <h1>Highfield Recuitment Test App</h1>

            {loading ? <LoadingSpinner/> :null }

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="users-tab" data-bs-toggle="tab" data-bs-target="#users" type="button" role="tab" aria-controls="users" aria-selected="true">Users</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="ages-tab" data-bs-toggle="tab" data-bs-target="#ages" type="button" role="tab" aria-controls="ages" aria-selected="false">Ages</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="colours-tab" data-bs-toggle="tab" data-bs-target="#colours" type="button" role="tab" aria-controls="colours" aria-selected="false">Colours</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="users" role="tabpanel" aria-labelledby="users-tab">
                    <UsersTable users={users}/>
                </div>
                <div className="tab-pane fade" id="ages" role="tabpanel" aria-labelledby="ages-tab">
                    <AgesTable ages={ages} users={users} />
                </div>
                <div className="tab-pane fade" id="colours" role="tabpanel" aria-labelledby="colours-tab">
                    <ColoursTable colours={colours} users={users}/>
                </div>
            </div>
        </div>
    );
}

export default App;
