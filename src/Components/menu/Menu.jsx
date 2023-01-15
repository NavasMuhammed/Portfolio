import "./menu.scss";

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Intro</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#work">Skills</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Education</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
