

export default function App() {

  function signUp(formData){
    const email = formData.get("email")
    const password = formData.get('password')
    const description = formData.get('description')
    const employmentStatus = formData.get('employmentStatus')
    console.log(email)
    console.log(password)
    console.log(description)
    console.log(employmentStatus)
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

        <button>Submit</button>
      </form>

    </>
  )
}
