import http from "../http-common";

class RoomServiceClass {
  // constructor() {}

  getRoomByID(id) {
    return http.get(`/api/rooms/${id}`);
  }

  getAllRooms() {
    return http.get("/api/rooms");
  }
}

const RoomService = new RoomServiceClass();

export default RoomService;
