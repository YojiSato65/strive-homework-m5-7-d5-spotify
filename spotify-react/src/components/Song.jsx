import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { setSelectedSongAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong.selected,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedSong: (track) => {
    dispatch(setSelectedSongAction(track));
  },
});

const Song = ({ track, selectedSong, setSelectedSong }) => (
  <div
    className="py-3 trackHover d-flex"
    onClick={() => setSelectedSong(track)}
  >
    <span
      className="card-title trackHover px-3 mb-0"
      style={{ color: "white" }}
    >
      {track.title}
    </span>
    <button className="song-like-button ml-auto mr-5">
      <AiOutlineHeart />
    </button>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
