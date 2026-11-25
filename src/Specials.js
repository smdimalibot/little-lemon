function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>This Week's Specials!</h2>
                <button type="button" className="btn-primary">Online Menu</button>
            </div>

            <div className="specials-grid">
                <article className="specials-card">
                    <img src="greek-salad.jpg" alt="Greek Salad" />
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Greek Salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>
                            Crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p className="order-link">Order a delivery</p>
                    </div>
                </article>

                <article className="specials-card">
                    <img src="bruschetta.jpg" alt="Bruschetta" />
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Bruschetta</h3>
                            <span className="price">$5.99</span>
                        </div>
                        <p>
                            Grilled bread smeared with garlic and seasoned with salt and olive oil, topped with fresh tomatoes, basil, and balsamic glaze.
                        </p>
                        <p className="order-link">Order a delivery</p>
                    </div>
                </article>

                <article className="specials-card">
                    <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Lemon Dessert</h3>
                            <span className="price">$5.00</span>
                        </div>
                        <p>
                            A refreshing lemon dessert with a zesty twist, perfect for ending your meal on a sweet note.
                        </p>
                        <p className="order-link">Order a delivery</p>
                    </div>
                </article>
            </div>

        </section>
    );
}

export default Specials;