import auth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = auth();
  console.log(user);
  return (
    <div>
      <h1 className="text-3xl font-bold my-6 flex justify-center">
        User Details
      </h1>
      <div className="">
        <div className="card card-compact w-full bg-base-100 shadow-xl grow">
          <figure>
            <img src={user?.photoURL} alt={user?.displayName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Name: {user?.displayName}</h2>
            <p className="font-bold text-xl">Email: {user?.email}</p>
            <p className="font-bold">UID: {user?.uid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
