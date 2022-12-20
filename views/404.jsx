const React = require('react')
const Default = require('./layouts/Default')

function NotFound () {
    return (
        <Default title="404Error">
            <main>
                <h2>404: PAGE NOT FOUND</h2>
                    <h5>... looks like you missed a step.</h5>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2021/07/23/09/32/bread-6486963__340.jpg" alt="Photo of a person holding a compass"></img> 
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
