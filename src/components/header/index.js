import imageCat from '../../assets/cat.webp';
import styles from './styles.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="image-cat-container">
                <img src={imageCat} className="image-cat" />
            </div>
            <div className="title-container">
                <h1 className="title">Cat search page</h1>
            </div>


        </div>
    )

}

export default Header;