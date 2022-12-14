// requiring react
const React = require('react')
// utilizing Default from layouts/default.jsx
const Default = require('./layouts/Default')


// creating bread index view
function Index({breads, title}) // breads is the object in controllers/bread_controller INDEX route
{
    return (
        <Default title={title}>
            <h2>Our Breads</h2>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
            {/* <p>I have {breads[0].name} bread!</p> */}
            {
                // below loops over the models/breads.js array and turns it to an
                // unordered list
                breads.map((bread, index)=> {
                    return (
                        <li key={index} className='breadlist'>
                            {/* below <a></a> adds dynamic links to the route
                            the `${}` ensures the breads will be linked to their 
                            proper array index */}
                            <a href={`/breads/${bread.id}`} className='link'>
                                {bread.name} 
                                {/* above adds the bread names to the route */}
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