const React = require('react')
const Default = require('./layouts/Default')

function NotFound () {
    return (
        <Default title="404 Error">
            <main>
                <h2>404: PAGE NOT FOUND</h2>
                    <h4>You seem lost...</h4>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/11/22/21/37/compass-1850673_960_720.jpg" alt="Photo of a person holding a compass"></img> 
                        </div>
                        <br></br>
                        <div>
                            <a href="/breads"><button className="btn btn-primary">Back to breads</button></a>
                        </div>
            </main>
        </Default>
    )
    }

module.exports = NotFound
