import { connect } from 'react-redux'
import React from 'react'
import { Row, Image } from 'react-bootstrap'
import { AiOutlineHeart } from 'react-icons/ai'

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong.selected,
})

const Player = ({ selectedSong }) => (
  <div className="container-fluid fixed-bottom bg-container pt-1">
    <Row>
      <div className="col-lg-10 offset-lg-2 d-flex">
        <div style={{ width: '30%' }} className="d-flex pl-5 mt-3">
          <div className="mr-2">
            <Image src="https://via.placeholder.com/50" />
          </div>
          <div>
            <h5 style={{ color: 'white', fontSize: '1em' }}>
              {selectedSong?.title}
            </h5>
            <p style={{ color: 'white', fontSize: '0.8em' }}>
              {selectedSong?.artist?.name}
            </p>
          </div>
          <div className="pt-2 ml-2">
            <button className="song-like-button ml-auto mr-5">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
        <div style={{ width: '70%' }}>
          <Row>
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <a href="/">
                  <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </Row>
            </div>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div id="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </Row>
  </div>
)

export default connect(mapStateToProps)(Player)
