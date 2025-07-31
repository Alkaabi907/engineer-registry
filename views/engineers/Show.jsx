const React = require('react')

function Show(props) {
  const { engineer } = props
  if (!engineer) return <div>Engineer not found</div>

  return (
    <div>
      <h1>{engineer.name}</h1>
      <a href="/engineers">Go back to Index Page</a>
      <p>
        Specialty: {engineer.specialty} <br />
        Years of Experience: {engineer.yearsExperience || 'N/A'} <br />
        Availability: {engineer.available ? 'Available' : 'Not Available'}
      </p>

      <form action={`/engineers/${engineer._id}?_method=DELETE`} method="POST">
        <input type="submit" value={`Delete this engineer`} />
      </form>

      <div>
        <a href={`/engineers/${engineer._id}/edit`}>
          <button>{`Edit this engineer`}</button>
        </a>
      </div>
    </div>
  )
}

module.exports = Show