// frontend/components/LoginForm.jsx
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useState } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-5 mt-10">
        <input
          type="email"
          placeholder="email"
          className="input"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          className="input"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-950 text-white p-2 rounded">
          {status === "loading" ? "Logging in..." : "Login"}
        </button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default LoginForm;
