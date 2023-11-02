import './index.css'

import {Component} from 'react'

//import HistoriListItem from '../HistoryListItem'

class HistoriItem extends Component {
  state = {searchInput: '', historyDetaiedlist: initialHistoryList}

  deleteHistory = id => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  searchInputValue = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {initialHistoryList} = this.props

    const searchResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <header>
          <nav>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo"
            />

            <div className="searchContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchImage"
              />
              <input
                type="search"
                className="inputElement"
                placeholder="Search history"
                onChange={this.searchInputValue}
              />
            </div>
          </nav>
        </header>
        <div>
          <ul>
            {searchResults.map(eachBrowse => (
              <HistoriListItem
                key={eachBrowse.id}
                time={eachBrowse.timeAccessed}
                logoUrl={eachBrowse.logoUrl}
                title={eachBrowse.title}
                domainUrl={eachBrowse.domainUrl}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoriItem
