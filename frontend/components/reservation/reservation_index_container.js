import {connect} from 'react-redux';

import ReservationIndex from './reservation_index';

import {
  fetchUserReservations,
  deleteReservation,
  fetchReservation,
} from "../../actions/reservation_actions";

const mSTP = state => {
    return {
      currentUser: state.session.currentUser,
      reservations: Object.values(state.entities.reservations),
      houses: state.entities.houses,
    };
}

const mDTP = dispatch => {
  return {
    fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId)),
    deleteReservation: (reservationId) =>
      dispatch(deleteReservation(reservationId)),
    fetchHouses: () => dispatch(fetchHouses()),
    fetchReservation: (id) => dispatch(fetchReservation(id)),
  };
}

export default connect(mSTP,mDTP)(ReservationIndex)