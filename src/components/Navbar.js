import React from 'react'
import { Grid, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'




class Navbar extends React.Component {
   

    render() {
        return (
            <Grid.Row >
                <Grid.Column width={16}>
                    <Menu fixed={'top'} className='ui stackable teal inverted menu'  size={'medium'}>
                        <Image size={'small'} src={"https://github.com/christianduncan/p2_client/blob/master/public/logo2.png?raw=true"} />
                        <SearchBar handleSearch={this.props.handleSearch} showNoResults={false}/> 
                        {
                            this.props.currentUser

                                ?

                                
                                
                                <Menu.Menu position="right" >
                                    <Link className="item" to={`/users/${this.props.currentUser.id}`}>
                                        <img src={this.props.currentUser.avatar_url} alt={this.props.currentUser.username} />
                                    </Link>
                                   
                                    <Link className="item" to="/animals">
                                        Animals!
                                    </Link>

                                    <Link className="item"to="/shelters">
                                    Local Shelters 
                                    </Link>
                                    

                                    <Menu.Item onClick={this.props.logOut}>
                                        Log out
								</Menu.Item>
                                </Menu.Menu>

                                :

                                <Menu.Menu position="right">
                                    <Link className="item" to="/login">
                                        Login
								</Link>
                                    <Link className="item" to="/signup">
                                        Sign Up
								</Link>
                                </Menu.Menu>

                        }
                    
                    </Menu>
                </Grid.Column>
            </Grid.Row>
            
        )
    }
}

export default Navbar
