

export default function App() {

  function handleSubmit(event){
    event.preventDefault()
    console.log(event.currentTarget)
    const formEl = event.currentTarget
    const formData = new formData(formEl)
    const email = formData.get("email")
    console.log(email)
    formEl.reset()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>

    </>
  )
}
