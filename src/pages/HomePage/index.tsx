import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { LIST_CHARACTERS } from "./../../graphql/queries";
import { Characters } from "../../typings/characters";

export const HomePage = () => {
  const { data, loading, error } = useQuery<{ characters: Characters }>(
    LIST_CHARACTERS
  );

  if (loading)
    return (
      <>
        <h1 className="text-center text-4xl text-purple-900 font-bold">
          Carregando...
        </h1>
      </>
    );

  if (error || !data?.characters)
    return (
      <>
        <h1 className="text-center text-4xl text-red-900 font-bold">
          Failed :(
        </h1>
      </>
    );

  const { results } = data.characters;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {results.map(({ id, name, image }) => (
          <Link to={`/character/${id}`}>
            <Card>
              <img src={image} alt="Character Image" />
              <h2 className="text-xl text-gray-900 mt-9">{name}</h2>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};
