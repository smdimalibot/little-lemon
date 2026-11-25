import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingTimes';

const sampleTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

beforeEach (() => {
    window.fetchAPI = jest.fn(() => sampleTimes);
});

afterEach (() => {
    delete window.fetchAPI;
});

test('Renders static text inside BookingForm', () => {
    render(
        <BookingForm availableTimes={sampleTimes} dispatch={jest.fn()} />
    );
    const labelElement = screen.getByText(/Choose date/i);
    expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the expected initial available times', () => {
    const times = initializeTimes();
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(times).toEqual(sampleTimes);
});

test('updateTimes return the expected time state', () => {
    const apiTimes = [ '17:30', '18:30', '20:30' ];
    window.fetchAPI = jest.fn(() => apiTimes);

    const action = { type: 'UPDATE_TIMES', date: '2026-11-25' };
    const updatedTimes = updateTimes (sampleTimes, action);

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2026-11-25'));
    expect(updatedTimes).toEqual(sampleTimes);
});