import { useParams } from "react-router";
import "./moviedetail.scss";

export const MovieDetail = () => {
    let { id } = useParams();

  return (
    <div className="MovieDetail">
      <h1>Movie Detail</h1>
      <h1>Id: {id}</h1>
    </div>
  );
}
