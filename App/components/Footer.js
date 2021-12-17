import React from 'react'

function Footer() {
    return (
        <footer className="footer container" id="footer">
            <p>FOLLOW US ON</p>
            <div className="sites">
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com" target="_blank"><i className="fab fa-youtube"></i></a></li>
                </ul>
                <p className="copyright">ALL RIGHTS RESERVED &copy;</p>
            </div>
        </footer>
    )
}

export default Footer