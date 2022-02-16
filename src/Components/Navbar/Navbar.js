import React from 'react';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            users: null

        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
               
                this.setState({users:result.data})
            })
        })
    }

    render() {
        return (
            <>
                <div className='wrapper'>

                    <h1>Fetch API Data</h1>
                    {
                        this.state.users ?
                        this.state.users.map((item,i)=>
                        <div><p>
                            {i}
                            ---
                            {item.first_name} 
                            {item.last_name}
                            ---
                            {item.email}
                            </p></div>
                        )
                        :
                        null
                    }
                </div>
            </>
        );
    }
}

export default Navbar;
