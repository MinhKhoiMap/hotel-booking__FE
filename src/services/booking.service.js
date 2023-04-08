import http from "../http-common";

class BookingServiceClass {
  constructor() {}

  getBookingByID(id) {
    return http.get(`/api/booking/${id}`);
  }

  createBooking(booking) {
    return http.post("/api/booking", booking);
  }
}

export default new BookingServiceClass();
