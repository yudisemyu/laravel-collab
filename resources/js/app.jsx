import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Line } from 'react-chartjs-2';

// Chart.js registrations (wajib agar chart muncul)
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Hello, ${name}! Welcome to React!`);
    };

    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales in 2025',
                data: [30, 40, 35, 50, 70],
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div style={{ fontFamily: 'Arial', padding: '20px' }}>
            <h1>Hello from React!</h1>

            {/* Counter Section */}
            <h2>Counter Example</h2>
            <p style={{ fontSize: '20px' }}>Counter: {count}</p>
            <button onClick={decrement} style={{ fontSize: '20px', marginRight: '10px' }}>−</button>
            <button onClick={increment} style={{ fontSize: '20px' }}>+</button>

            {/* Form Section */}
            <h2>Greeting Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
            </form>
            {message && <p>{message}</p>}

            {/* Chart Section */}
            <h2>Sales Data</h2>
            <div style={{ width: '300px', height: '200px' }}>
                <Line data={chartData} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
