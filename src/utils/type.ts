export interface Bus {
destination: String;
busDepartureLocation: String;
departureTime: String
departureDate: String;
driverName: String;
driverContact: String
estimatedDuration: String
breaks: Number;
price: Number;
busNumber: String;
busType: String;
cooperative: Cooperative;
seats: Seat[]
}

export interface Cooperative {
    name: String;
    phoneNumber: String;
}

export interface Seat {
    isAvailable: Boolean;
}