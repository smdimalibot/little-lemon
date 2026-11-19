import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <Section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking" className="btn btn-primary">Reserve a Table</Link>
                </div>
                <div className="hero-image">
                    <img src="restaurant.jpg" alt="Little Lemon signature dish" />
                </div>
            </div>
        </Section>
    );
}

export default CallToAction;