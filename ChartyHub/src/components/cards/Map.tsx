import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "@/components/ui/input";


interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

interface LocationMarkerProps {
  setLocation: (location: Location) => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ setLocation }) => {
  const [position, setPosition] = useState<Location | null>(null);
  
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const newPosition = { latitude: lat, longitude: lng, address: `Lat: ${lat}, Lng: ${lng}` };
      setPosition(newPosition);
      setLocation(newPosition);
    },
  });

  return position ? (
    <Marker position={[position.latitude, position.longitude]}>
      <Popup>تم تحديد موقعك</Popup>
    </Marker>
  ) : null;
};

interface LocationPickerProps {
  setLocation: (location: Location) => void;
  location: Location;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ setLocation, location }) => {
  return (
    <div className="!space-y-2">
      <div className="flex items-center gap-2">
        {/* <MapPin className="text-gray-500" /> */}
        <Input
          type="text"
          placeholder="Address"
          value={location?.address || ""}
        //   readOnly
          required
        />
      </div>
      <MapContainer center={[30.0444, 31.2357]} zoom={13} className="h-64 w-full rounded-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker setLocation={setLocation} />
      </MapContainer>
    </div>
  );
};

export default LocationPicker;
