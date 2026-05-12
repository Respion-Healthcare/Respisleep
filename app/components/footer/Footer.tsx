export default function Footer() {
  return (
    <footer>

      <div className="footer-grid">

        <div className="footer-brand">

          <div
            className="nav-logo"
            style={{ display: "inline-flex" }}
          >
            <div className="shield">🛡</div>
            RESPISLEEP
          </div>

          <p>
            Advancing respiratory health worldwide
            with innovative therapy solutions.
          </p>

        </div>

        <div className="footer-col">

          <h4>Products</h4>

          <ul>
            <li><a href="#">CPAP Machines</a></li>
            <li><a href="#">BiPAP</a></li>
            <li><a href="#">Masks</a></li>
          </ul>

        </div>

        <div className="footer-col">

          <h4>Support</h4>

          <ul>
            <li><a href="#">Setup Guides</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2025 Respisleep. All rights reserved.
        </span>

        <span>
          🇮🇳 Made for India
        </span>
      </div>

    </footer>
  );
}