import Header from './Header'
import '../style.css'

const Layout = ({ children }) => {
    return (
        <div>
            <Header name="Mythology greek"/>
            {children}
        </div>
    )
}

export default Layout