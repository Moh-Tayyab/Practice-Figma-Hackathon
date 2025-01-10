import { NextResponse } from 'next/server';

//Practice Route Handler for Shipment Tracking
export async function GET(req, { params }) {
  const { trackingId } = params;

  // Fetch the shipment data from the mock API
  const response = await fetch('https://677c126d20824100c07bc6cf.mockapi.io/shop/shipments');
  const shipments = await response.json();

  // Find the specific shipment by ID
  const shipment = shipments.find((s) => s.shipmentId === trackingId);

  if (!shipment) {
    return NextResponse.json({ error: 'Shipment not found' }, { status: 404 });
  }

  return NextResponse.json(shipment);
}
