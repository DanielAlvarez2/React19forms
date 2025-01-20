

export default function App() {

  function signUp(formData){
    const email = formData.get("email")
    const password = formData.get('password')
    const description = formData.get('description')
    const employmentStatus = formData.get('employmentStatus')
    const dietaryRestrictions = formData.getAll('dietaryRestrictions')
    const favColor = formData.get('favColor')
    console.log(email)
    console.log(password)
    console.log(description)
    console.log(employmentStatus)
    console.log(dietaryRestrictions)
    console.log(favColor)
  }
  return (
    <>
      <form action={signUp}>
        <h1>Signup Form</h1>

        <label htmlFor='email'>Email: </label>
        <input  type='email' 
                id='email' 
                name='email' 
                placeholder='name@example.com'
                className='input' 
        />
        <br/>
        <label htmlFor='password'>Password: </label>
        <input  type='password' 
                id='password' 
                name='password' 
                className='input' 
        />
        <br/>
        <label htmlFor='description'>Description:</label>
        <textarea id='description' name='description'></textarea><br/>
        
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type='radio' name='employmentStatus' value='unemployed' />
            Unemployed
          </label>
          <label>
            <input type='radio' name='employmentStatus' value='part-time' />
            Part-time
          </label>
          <label>
            <input type='radio' name='employmentStatus' value='full-time' />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary Restrictions:</legend>
          <label>
            <input type='checkbox' name='dietaryRestrictions' value='kosher' />
            Kosher
          </label>
          <label>
            <input type='checkbox' name='dietaryRestrictions' value='vegan' />
            Vegan
          </label>
          <label>
            <input type='checkbox' name='dietaryRestrictions' value='gluten-free' />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor='favColor' id='favColorLabel'>What is your favorite color?</label>
        <select id='favColor' name='favColor' required>
          <option value='' disabled> --- Choose a color --- </option>
          <option value='red'>Red</option>
          <option value='orange'>Orange</option>
          <option value='yellow'>Yellow</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='indigo'>Indigo</option>
          <option value='violet'>Violet</option>
        </select>
        <button>Submit</button>
      </form>

    </>
  )
}
