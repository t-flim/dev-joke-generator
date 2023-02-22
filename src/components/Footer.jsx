import "../App.css"

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="footer">
            <p className="footer-content">
                &copy; {currentYear} | thefulim.my
            </p>
        </footer>
    )
}

export default Footer