const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Engineer Page</h1>
            <a href='/engineers'>Go back to Index Page</a>
            <form action="/engineers" method="POST">
                Name: <input type="text" name="name" /><br/>
                Specialty: <input type="text" name="specialty" /><br/>
                yearsExperience: <input type="number" name="yearsExperience" /><br/>
                Available: <input type="checkbox" name="available" /><br/>
                <input type="submit" value="Create Record" />
            </form>
        </div>
    )
}

module.exports = New