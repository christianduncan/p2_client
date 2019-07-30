import React from 'react'
import { Grid, Menu, Image, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'




class Navbar extends React.Component {
   

    render() {
        return (
            <Grid.Row >
                <Grid.Column width={16}>
                    <Menu  id={'nav'} secondary icon className='ui stackable black  menu'  size={'medium'}>
                        <Image size={'small'} src={"https://github.com/christianduncan/p2_client/blob/master/public/RescueLogo.png?raw=true"} />
                        <Button.Group icon size={'mini'}>
                            <Button color={'facebook'} class="ui facebook button">

                                <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large">
                                    <i class="facebook icon"></i>
                                    <a id='link' target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" data-text="Look through thousands of furry friends on Paws Rescue Adoption Hub!" data-hashtags="RescuePaws" data-show-count="false">Facebook</a>
                                </div>

                            </Button>

                            

                            <Button color={'twitter'} class="ui twitter button">
                                <i class="twitter icon"></i>
                                <a id='link' href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Look through thousands of furry friends on Paws Rescue Adoption Hub!" data-hashtags="RescuePaws" data-show-count="false">Twitter</a>
                                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </Button>
                        </Button.Group>
                        
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
