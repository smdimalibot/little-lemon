import { useState } from 'react';

function BookingForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState('Birthday');
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', 
        '18:00', 
        '19:00', 
        '20:00', 
        '21:00'
    ]);

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, time, guests, occasion});
    };

    return (
        <form
            onSubmit={HandleSubmit}
            style={{ display: 'grid', maxWidth: '320px', gap: '16px'}}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChangeCapture={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((slot) => (
                    <option key={slot} value={slot}>
                        {slot}
                    </option>
                ))}
            </select>

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChangeCapture={(e) => setOccasion(e.target.value)}
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