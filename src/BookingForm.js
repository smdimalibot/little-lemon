import { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState('Birthday');
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmedBooking, setConfirmedBooking] = useState(null);

    const handleDateChange = (e) =>{
        const selectedDate = e.target.value;
        setDate(selectedDate);
        setErrorMessage('');
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const guestCount = Number(guests);

        if (!date) {
            setErrorMessage('Please choose a reservation date.');
            return;
        }
        if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 10) {
            setErrorMessage('Number of guests must be between the numbers of 1 and 10.');
            return;
        }

        const formData = { date, time, guests: guestCount, occasion };
        const isSubmitted =
            typeof window !== 'undefined' && typeof window.submitAPI === 'function'
            ? window.submitAPI(formData)
            : true;

        if (!isSubmitted) {
            setErrorMessage('Unable to complete reservation. Please try another time or date.');
            return;
        }

        setErrorMessage('');
        setConfirmedBooking(formData);
    };

    if (confirmedBooking) {
        return (
            <div className="confirmation-card" role="status" aria-live="polite">
                <h3>Booking Confirmed!</h3>
                <p><strong>Date:</strong> {confirmedBooking.date}</p>
                <p><strong>Time:</strong> {confirmedBooking.time}</p>
                <p><strong>Guests:</strong> {confirmedBooking.guests}</p>
                <p><strong>Occasion</strong> {confirmedBooking.occasion}</p>
                <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setConfirmedBooking(null)}
                >
                    Book Another Table
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="booking-form" noValidate>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((slot) => (
                    <option key={slot} value={slot}>
                        {slot}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange = {(e) => setGuests(Number(e.target.value))}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            {errorMessage && (
                <p className="form-error" role="alert">
                    {errorMessage}
                </p>
            )}

            <button type="submit" className="btn-primary">
                Make Your Reservation
            </button>
        </form>
    );
}

export default BookingForm;