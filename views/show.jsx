const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    // console.log(bread.name)
        return (
            <Default title={bread.name}>
                <h3>{bread.name}</h3>
                <h5>Ingredients</h5>
                <p>{bread.ingredients}</p>
                <br/>
                <h5>Instructions</h5>
                <p>{bread.instructions}</p>
                <img src={bread.image} alt={bread.name} />
                {/* below is a ternary operator (if/else are not available in JSX) about gluten info */}
                <br/>
                <p>{bread.getBakedBy()}</p>
                <p> 
                    *
                    {
                        bread.hasGluten 
                        ? <span> contains </span>
                        : <span> does not contain </span>
                    }
                    gluten
                </p>
                <br/>
                <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
                <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                    <input type='submit' value="DELETE"/>
                </form>
                <a href="/breads"><button>Back to Breads</button></a>
            </Default>
        )
}

module.exports = Show
