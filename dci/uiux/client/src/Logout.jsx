export default function Logout({ onLogout }) {
  return (
    <button style={{ color: "red" }} onClick={onLogout}>
      Logout
    </button>
  );
}
