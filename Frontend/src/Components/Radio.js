import React from 'react'

export default function Radio() {
  return (
    <div>
      <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" checked />
      <label className="btn btn-primary my-3 mx-3" for="option1">Placements</label>

      <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" />
      <label className="btn btn-primary my-3 mx-3" for="option2">Higher Studies</label>

      <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" />
      <label className="btn btn-primary my-3 mx-3" for="option2">Internships</label>

      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}
