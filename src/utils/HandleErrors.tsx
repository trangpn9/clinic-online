import type { LoaderFunctionArgs } from "react-router-dom";
import {
  json,
  Link,
  Outlet,
  useRouteError,
} from "react-router-dom";

export function Fallback() {
  return <p>Performing initial data "load"</p>
}

export function Layout() {
  return (
    <>
      <nav>
        <Link to="/projects/authorized">Authorized Project</Link>
        &nbsp;|&nbsp;
        <Link to="/projects/unauthorized">Unauthorized Project</Link>
        &nbsp;|&nbsp;
        <Link to="/projects/broken">Broken Project</Link>
      </nav>
      <p>
        This example shows the flexibility of{" "}
        <code>&lt;Route errorElement&gt;</code>
      </p>
      <ul>
        <li>
          Clicking the "Authorized Project" link will take you to the happy path
          where we successfully load and render the details for a project.
        </li>
        <li>
          Clicking the "Unauthorized Project" link will simulate a case where
          the user does not have access to the given project, so our loader can
          throw a 401 response that is handed in-context by a{" "}
          <code>&lt;ProjectErrorBoundary&gt;</code>.
        </li>
        <li>
          Clicking the "Broken Project" link will return some malformed data
          causing a render error. This is beyond what{" "}
          <code>&lt;ProjectErrorBoundary&gt;</code> can handle, so it re-throws
          the error and it gets handled by{" "}
          <code>&lt;RootErrorBoundary&gt;</code> instead.
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export function RootErrorBoundary() {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
}

export function projectLoader({ params }: LoaderFunctionArgs) {
  if (params.projectId === "unauthorized") {
    throw json({ contactEmail: "administrator@fake.com" }, { status: 401 });
  }

  if (params.projectId === "broken") {
    // Uh oh - in this flow we somehow didn't get our data nested under `project`
    // and instead got it at the root - this will cause a render error!
    return json({
      id: params.projectId,
      name: "Break Some Stuff",
      owner: "The Joker",
      deadline: "June 2022",
      cost: "FREE",
    });
  }

  return json({
    project: {
      id: params.projectId,
      name: "Build Some Stuff",
      owner: "Joe",
      deadline: "June 2022",
      cost: "$5,000 USD",
    },
  });
}
