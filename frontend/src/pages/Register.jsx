function Register() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Register</h1>

      <input placeholder="Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />

      <select>
        <option>Tenant</option>
        <option>Owner</option>
      </select>

      <br /><br />

      <button>Register</button>
    </div>
  );
}

export default Register;