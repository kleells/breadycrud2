// require react to utilize JSX
const React = require('react')

// Write a function called Default to hold an HTML boilerplate w/
// one argument (html)

function Default(html) {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                    {/* the code to tell where to load the HTML children for the different views
                    the {} will tell React/JSX to stop, evaluate and render contents */}    
                    {html.children}
            </body>
        </html>
    )
}

// export the code to other files
module.exports = Default