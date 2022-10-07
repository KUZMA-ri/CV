import './styles/main.css';

const Contacts = () => {
    return (
        <div className="about__contacts contacts">
        <ul className="contacts__list">
            <li className="contacts__link"><a className="contacts__link-text" href="https://goo.gl/maps/JFYk2u5WUA4JbxEH8"><img className="contacts__icon" src="./images/icons/location.png" alt=""></img></a>Minsk, Belarus</li>
            <li className="contacts__link"><a className="contacts__link-text" href="https://mail.ru/"><img className="contacts__icon" src="./images/icons/email.png" alt=""></img>maryna_kuzmiankova@mail.ru</a></li>
            <li className="contacts__link"><a className="contacts__link-text" href="https://github.com/KUZMA-ri"><img className="contacts__icon" src="./images/icons/icons8-github-100.png" alt=""></img>https://github.com/KUZMA-ri</a></li>
            <li className="contacts__link"><a className="contacts__link-text" href="https://www.facebook.com/profile.php?id=100038301994225"><img className="contacts__icon" src="./images/icons/facebook.png" alt=""></img>https://www.facebook.com/profile.php?id=100038301994225</a></li>
        </ul>      
    </div>
    )
}

export default Contacts;