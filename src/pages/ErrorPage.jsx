import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="grid justify-center container py-32">
      <div>
        <h1 className="text-6xl font-bold mb-5 text-red-600">
          Error {status || 404}
        </h1>
        <p className="text-xl font-bold md:text-2xl">{error?.message}</p>
        <button className="btn btn-primary mt-4 font-bold">
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
