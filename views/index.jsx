// requiring react
const React = require('react')
// utilizing Default from layouts/default.jsx
const Default = require('./layouts/Default')


// creating bread index view
function Index({breads, title}) // breads is the object in controllers/bread_controller INDEX route
{
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            {
                breads.map((bread, index)=> {
                    return (
                        <li key={index}>
                            <a href={`/breads/${index}`}>
                            {bread.name}
                            </a>
                        </li>
                    )
                })
            }
        </Default>
    )
}

// exporting Index function
module.exports = Index