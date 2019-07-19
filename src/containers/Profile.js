import React from 'react'
import { Loader, Grid, Segment, Image} from 'semantic-ui-react'


class Profile extends React.Component {
    state = {
        user: null     
    }
    componentDidMount() {
        const userId = this.props.match.params.id
        fetch(`http://localhost:3001/api/v1/users/${userId}`)
            .then(res => res.json())
            .then(response => {
                this.setState({ user: response })
            })
    }

    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

  

    

    render() {
        const { user } = this.state

        if (user) {
            return (
                <Grid columns={2} centered>
                    <Grid.Column width={3}>
                        <Segment>
                            <Image src={user.avatar_url} fluid />
                            <strong>{user.username}</strong><br />
                            <strong>{user.name}</strong>
                            
                        </Segment>
                        

                    </Grid.Column>
                    
                </Grid>
            )
        } else {
            return <Loader />
        }
    }
}

export default Profile