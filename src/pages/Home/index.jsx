import { Link } from "react-router-dom";
// import { SearchForm } from '../../components/SearchForm'
import useUser from "../../hooks/useUser";

export const Home = () => {
  const { user, logout } = useUser();
  return (
    <>
      {/* <SearchForm /> */}
      <h1>Home</h1>
      <hr />

      {user ? (
        <>
          <h2>Hola {user}</h2>
          <button onClick={() => logout()}>salir</button>
        </>
      ) : (
        <Link to={"/login"}>Ingresá</Link>
      )}
    </>
  );
};
