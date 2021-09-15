import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen}){
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                     <a href="#intro">HOME</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                     <a href="#edu">Education</a>
                </li >           
                <li onClick={() =>setMenuOpen(false)}>
                     <a href="#skills">skills</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                      <a href="#project2">projects</a>
                </li >
                <li onClick={() =>setMenuOpen(false)}>
                     <a href="#contact">Connect</a>
                </li>
            </ul>
        </div>
    );
}

