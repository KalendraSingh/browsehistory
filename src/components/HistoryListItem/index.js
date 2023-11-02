import './index.css'

const HistoryListItem = props => {
  const {id, time, logoUrl, title, domainUrl, deleteHistory} = props

  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div className="listConainer">
        <p>{time}</p>
        <div className="middleContainer">
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button onClick={onDeleteHistory} type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryListItem
