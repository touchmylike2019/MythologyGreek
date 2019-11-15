import "../style.css"
import Header from './Header'
import Navbar from './Navbar'

export default ({ children }) => {
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