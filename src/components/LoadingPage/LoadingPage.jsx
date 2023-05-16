import './LoadingPage.css'

const LoadingPage = () => {
  return (
  <>
    <div className="loading">
      <div className="cube">
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
        <div className="side left"></div>
        <div className="side right"></div>
      </div>
    </div>
    <p>Loading Data ...</p>
  </>
  )
}

export default LoadingPage