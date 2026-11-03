import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";

export default function NotFound() {
  return (
    <section className="container-site py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-6 text-5xl">
        This path is <span className="accent">yet to be walked.</span>
      </h1>
      <Link to="/" className="btn-primary mt-7 md:mt-10">
        Return home <Arrow />
      </Link>
    </section>
  );
}
