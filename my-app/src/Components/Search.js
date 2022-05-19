import React, { Component } from 'react';

class Search extends Component {

    state = {
        search: "panda",
        type: "all"
    }

    changeClick = (e) => {
        this.setState({search: e.target.value})
    }

    keyClick = (e) => {
        if(e.key === "Enter"){
            this.props.Search(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState({type: e.target.dataset.type}, () => {
            this.props.Search(this.state.search, this.state.type)
        })
    }

    componentDidMount() {
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log(this.state);
    }
    

    render(props) {
        return (
            <div className="Search">
                <input type="search"
                value={this.state.search} 
                onChange={this.changeClick} 
                placeholder="Search..."
                onKeyDown={this.keyClick}
                />
                <button onClick={() => this.props.Search(this.state.search, this.state.type)} className="btn_red">Search</button> <br />
                <div>
                    <label>
                        <input type="radio" className="with-gap" data-type="all" onChange={this.handleFilter} checked={this.state.type === "all"} />
                        <span>All</span>
                    </label>
                    <label>
                        <input type="radio" className="with-gap" data-type="Movie" onChange={this.handleFilter} checked={this.state.type === "Movie"} />
                        <span>Movie only</span>
                    </label>
                    <label>
                        <input type="radio" className="with-gap" data-type="Series" onChange={this.handleFilter} checked={this.state.type === "Series"} />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;