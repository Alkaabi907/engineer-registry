const React = require('react')

function Edit (props) {
    const { name, _id, available,yearsExperience, specialty } = props.engineer

    return(
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/engineers'>Go back to Index Page</a>
            <form action={`/engineers/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Specialty: <input type="text" name="specialty" defaultValue={specialty}/><br/>
                yearsExperience: <input type="number" name="yearsExperience" defaultValue={yearsExperience}/><br/>
                Available: {available? <input type="checkbox" name="available" defaultChecked />: <input type='checkbox' name="available"/>}<br/>
                <input type="submit" value="Update record" />
            </form>
        </div>
    )
}

module.exports = Edit
