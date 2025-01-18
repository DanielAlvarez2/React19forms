

export default function App() {

  return (
    <>
      <form action='/api/my-server-code.php' method='POST' id='my-form'>
        <label htmlfor='first-name'>First Name: </label>
        <input type='text' id='first-name' name='firstName' class='input' />
        <br/>
        <label htmlfor='last-name'>Last Name: </label>
        <input type='text' id='last-name' name='lastName' class='input' />
        <br/>
        <input type='submit' />
      </form>

      <script src='./index.js'></script>
    </>
  )
}
