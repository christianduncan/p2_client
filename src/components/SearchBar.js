import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class SearchBar extends React.Component {

    render() {
        return (
            <div id={'search'} class="ui icon input">
                <input id={'search-input'} onChange={(e) => this.props.handleSearch(e)} type="text" placeholder="Search by State (e.g. NY)" />
                <i id={'icon-search'} aria-hidden="true" class="search icon"></i>
            </div>
        )
    }
}

export default SearchBar