import Card from "../components/auth/Card";
import auth from "../hooks/useAuth";

const Login = () => {
  const { login, loading } = auth();
  const handleLogin = (data) => {
    console.log(data);
    login(data?.email, data?.password);
  };

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  return (
    <div>
      <Card pageName={"Login"} handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
