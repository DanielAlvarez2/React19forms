

export default function App() {

  return (
    <>
      <form action='/api/my-server-code.php' method='POST' id='my-form'>
        <h1>Signup Form</h1>

        <label htmlFor='email'>Email: </label>
        <input  type='email' 
                id='email' 
                name='email' 
                placeholder='name@example.com'
                class='input' 
        />
        <br/>
        <label htmlFor='password'>Password: </label>
        <input  type='password' 
                id='password' 
                name='password' 
                class='input' 
        />
        <br/>
        <input type='submit' />
      </form>

    </>
  )
}
