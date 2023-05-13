const Notification = ({ message, type }) => {

    let notificationStyle = {};
    if (type === 'info') {
        notificationStyle = {
            backgroundColor: '#e8f4fd',
            color: '#0366d6',
            fontWeight: 'bold',
            border: '2px solid green'
        }
    } else if (type === 'error') {
        notificationStyle = {
          backgroundColor: '#ffeef0',
          color: '#d73a49',
          fontWeight: 'bold',
          border: '2px solid red'
        };
    }

    if (message === null) {
        return null
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification