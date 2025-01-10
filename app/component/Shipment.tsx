// File: /app/components/ShipmentTracker.js

'use client';

import { useState } from 'react';

export default function ShipmentTracker() {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState(null);

  const fetchShipment = async () => {
    try {
      const res = await fetch(`/api/shipment/${trackingId}`); // Corrected URL
      if (!res.ok) {
        throw new Error('Shipment not found');
      }
      const data = await res.json();
      setShipment(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setShipment(null);
    }
  };

  return (
    <div>
      <h1>Shipment Tracker</h1>
      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter Tracking ID"
      />
      <button onClick={fetchShipment}>Track Shipment</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {shipment && (
        <div>
          <h2>Shipment Details</h2>
          <p><strong>Status:</strong> {shipment.status}</p>
          <p><strong>Origin:</strong> {shipment.origin}</p>
          <p><strong>Destination:</strong> {shipment.destination}</p>
          <p><strong>Current Location:</strong> {shipment.currentLocation}</p>
          <p><strong>Estimated Delivery:</strong> {shipment.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
}
