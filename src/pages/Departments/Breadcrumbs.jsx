import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {paths.map((p, i) => (
        <span key={i}> / {p.toUpperCase()}</span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
