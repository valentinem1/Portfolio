import React from 'react';

const actualYear = () => {
    let date = new Date();
    let year = date.getFullYear();
    return year
}

const FolderContainer = () => {
    return (
        <div className="footer-container">
            <footer>
                <p className="footer-text">&copy; {actualYear()} Proudly created by Valentine Maillard | Email: <a className="email-link" href = "mailto: valentinemaillard1@gmail.com">valentinemaillard1@gmail.com</a></p>
            </footer>
        </div>
    );
};

export default FolderContainer;