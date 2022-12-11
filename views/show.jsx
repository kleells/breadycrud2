const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
    // console.log(bread.name)
        return (
            <Default>
                <h2>Bread Information</h2>
                <h3>{bread.name}</h3>
                {/* below is a ternary operator (if/else are not available in JSX) about gluten info */}
                <p>
                    and it 
                    {
                        bread.hasGluten 
                        ? <span> does </span>
                        : <span> does NOT </span>
                    }
                    have gluten
                </p>
                <img src={bread.image} alt={bread.name} />
                {/* link to home */}
                <li><a href="/breads">Go Home</a></li>
            </Default>
        )
}

module.exports = Show
