export default function Navbar() {
  return (
    <nav className="nav">
      <a className="nav-logo" href="#">
        <div className="shield">🛡</div>
        RESPISLEEP
      </a>

      <ul className="nav-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#accessories">Accessories</a></li>
        <li><a href="#" className="nav-cta">Get a Quote</a></li>
      </ul>
    </nav>
  );
}