import { Link, useRouteError } from "react-router-dom";

// import React from 'react'

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black bg-opacity-90">
      <p>🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬</p>
      <h1 className="text-3xl font-semibold text-gray-400">
        {error.statusText} - {error.status}
      </h1>
      <p className="text-gray-400">{error.data}</p>
      <Link to="" className="text-blue-500">
        &larr; Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
