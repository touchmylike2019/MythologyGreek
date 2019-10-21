import Header from './Header'
import "../style.css"

const Layout = ({ page, children }) => {
    return (
        <div>
            <Header name="Mythology greek" page={page}/>
            {children}
            <style jsx global>{`
                body{
                    margin: 0;
                    padding: 0;
                    font-family: 'Kanit';
                }
            `}</style>
        </div>
    )
}

export default Layout