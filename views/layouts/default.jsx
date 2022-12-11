// require react to utilize JSX
const React = require('react')

// Write a function called Default to hold an HTML boilerplate w/
// one argument (html)

// this boilerplate will be viewed with the index.jsx boilerplate 
// in the /breads view with a list of breads
// from models/bread.js and working links
// there individual routes

// function Default(html) {
//     return (
//         <html>
//             <head>
//                 <title>{html.title || 'Default'}</title>
//             </head>
//             <body>
//                 <div className='wrapper'>
//                     <header>
//                         <h1>
//                             <a href="/breads">BreadCRUD</a>
//                         </h1>
//                     </header>
//                     <div className='container'>
//                     {/* the code to tell where to load the HTML children for the different views
//                     the {} will tell React/JSX to stop, evaluate and render contents */}    
//                     {html.children}
//                     </div>
//                 </div>
//             </body>
//         </html>
//     )
// }

    function Default(html) {
        return (
            <html>
                <head>
                    <title>{html.title || 'Default'}</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/main.css" />
                </head>
                <body>
                    <div className="wrapper">
                        <header>
                            <h1><a href="/breads" className="header">Welcome to BreadCRUD</a></h1>
                        </header>
                        <div className="container">
                            {html.children}
                        </div>
                    </div>
                </body>
            </html>
        )
    }
    

// export the code to other files
module.exports = Default