import './App.css'
export default function Nav(){
    return(
       
        <nav className='navbar'>
        <div className='nav-head justify-content-end'>
          
        </div>
          
<ul className="nav justify-content-end">
   
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#top">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#about">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#services">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#events">Events</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#resources">Resources</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#blogs">Blogs</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#content">Content</a>
  </li>
</ul>
        </nav> 
       
    )
}
