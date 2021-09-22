import React from 'react';
import Axios from 'axios';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        }
    };

    componentDidMount() {
        Axios.get('http://localhost:3001/clients')
            .then(res => {
               console.log(res.data)
               this.setState ({
                   clients: res.data
               })
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log(this.state.clients)
        };
        
    render() {
        return(
            <div>
                {this.state.clients.map(clients => <h4 key={clients.id}>{clients.newDate}</h4>)}
            </div>
        )
    }
}

export default Preview;