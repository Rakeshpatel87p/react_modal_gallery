import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Shows from './shows';

class ModalSwitch extends React.Component {
  previousLocation = this.props.location
  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path='/' component={showGallery}/>
          <Route path='/shows/:id' component={Modal}/>
        </Switch>
        {isModal ? <Route path='/shows/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const showGallery = () => (
  <div>
    {Shows.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/shows/${i.id}`,
          state: { modal: true }
        }}
      >
        <img className="galleryImage" alt={i.title} src={i.product_image_url} />
      </Link>
    ))}
  </div>
)

const Modal = ({ match, history }) => {
  console.log(event.clientY);
  const show = Shows[parseInt(match.params.id, 10) -1]
  if (!show) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className="modalContainer" onClick={back} style={{
          top: event.clientY,
          left: event.clientX
        }}>
      <div className='modal'>
        <h1>{show.title}</h1>
        <img alt={show.title} src={show.product_image_url} />
        <p>Number of Episodes: {show.episodes}</p>
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  )
}

const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
)

export default ModalGallery