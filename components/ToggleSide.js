const ToggleSide = ({ value, setToggle }) => {
    return (
        <div>
            {value ? (<button onClick={() => setToggle(!value)} className="toggle-sidebar" type="button">
                <i className="fas fa-times"></i>
            </button>) : (<button onClick={() => setToggle(!value)} className="toggle-sidebar" type="button">
                
                <i className="fas fa-angle-up"></i>
                <i className="fas fa-angle-down"></i>
            </button>)}

        </div>
    )
}

export default ToggleSide