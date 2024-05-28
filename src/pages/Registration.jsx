import Card from "../components/auth/Card";
import auth from "../hooks/useAuth";

const Registration = () => {
  const { createUser, loading } = auth();

  const handleRegistration = (data) => {
    console.log(data);
    createUser(data?.email, data?.password);
  };

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }
  return (
    <div>
      <Card pageName={"Registration"} handleRegistration={handleRegistration} />
    </div>
  );
};

export default Registration;
