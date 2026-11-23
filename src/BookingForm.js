import { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) =>{
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, time, guests, occasion});
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: 'grid', maxWidth: '320px', gap: '16px'}}
        >
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
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" className="btn-primary">
                Make Your Reservation
            </button>
        </form>
    );
}

export default BookingForm;