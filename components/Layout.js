import Header from './Header'
import "../style.css"
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const Layout = ({ children }) => {
    return (
        <div>
            <Header name="Mythology greek" />
            <Navbar />
            {children}
            
            <style jsx global>{`
                body{
                    margin: 0;
                    padding: 0;
                    font-family: 'Mali', cursive;
                }
            `}</style>
        </div>
    )
}

export default Layout