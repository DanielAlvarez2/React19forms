

export default function App() {

  function signUp(formData){
    const data = Object.fromEntries(formData) 
    const dietaryData = formData.getAll('dietaryRestrictions')
    console.log(data)
    console.log(dietaryData)
    const allData = {
      ...data,
      dietaryRestrictions: dietaryData
    }
    console.log(allData)
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
        <select id='favColor' name='favColor' required defaultValue=''>
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
