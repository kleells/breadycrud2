// require react to utilize JSX
const React = require('react')

// Write a function called Default to hold an HTML boilerplate w/
// one argument (html)

// this boilerplate will be viewed with the index.jsx boilerplate 
// in the /breads view with a list of breads
// from models/bread.js and working links
// there individual routes

function Default(html) {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <div className='wrapper'>
                    <header>
                        <h1>
                            <a href="/breads">BreadCRUD</a>
                        </h1>
                    </header>
                    <div className='container'>
                    {/* the code to tell where to load the HTML children for the different views
                    the {} will tell React/JSX to stop, evaluate and render contents */}    
                    {html.children}
                    </div>
                </div>
            </body>
        </html>
    )
}

// export the code to other files
module.exports = Default