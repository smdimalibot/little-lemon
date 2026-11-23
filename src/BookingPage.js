import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
    return (
        <section className="booking-section">
            <h2>Reservation Request</h2>
            <BookingForm 
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </section>
    )
}

export default BookingPage;