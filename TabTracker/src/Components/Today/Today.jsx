import React from 'react'
import '../commonCSS.css'

function Today() {
  return (
    <div className="content active">
        <h2>Today</h2>
        <div className="accordion">
            <div className="contentBox">
                <div className="label">Tab Name 1</div>
                <div className="content-desc">
                    <p>
                        <span className="headerAtt">URL: </span><a href="#">Youtube</a><br />
                        <span className="headerAtt">Opened At:</span> now <br />
                        <span className="headerAtt">Closed At:</span> now <br />
                        <span className="headerAtt">Time Spent:</span> None <br />
                        <span className="headerAtt">History: </span> lol
                    </p>
                </div>
            </div>

            <div className="contentBox">
                <div className="label">Tab Name 1</div>
                <div className="content-desc">
                    <p>
                        <span className="headerAtt">URL:</span> <a href="#">Youtube</a><br />
                        <span className="headerAtt">Opened At:</span> now <br />
                        <span className="headerAtt">Closed At:</span> now <br />
                        <span className="headerAtt">Time Spent:</span> None <br />
                        <span className="headerAtt">History: </span> lol
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Today