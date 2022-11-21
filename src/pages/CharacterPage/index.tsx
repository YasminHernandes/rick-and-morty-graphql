import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Character } from "../../typings/characters";
import { GET_CHARACTER } from "../../graphql/queries";
import { Card } from "./../../components/Card/index";

export const CharacterPage = () => {
  const { id }: never = useParams();
  const { data, loading, error } = useQuery<{
    character: Character;
    id: string;
  }>(GET_CHARACTER, { variables: { id: id } });

  if (loading)
    return (
      <>
        <h1 className="text-center text-4xl text-purple-900 font-bold">
          Carregando...
        </h1>
      </>
    );

  if (error || !data?.character)
    return (
      <>
        <h1 className="text-center text-4xl text-red-900 font-bold">
          Failed :(
        </h1>
      </>
    );

  const { character } = data;
  const { origin, location } = character;
  return (
    <>
      <div className="w-max flex self-center">
        <Card>
          <img src={character.image} />
          <div className="flex flex-col">
            <h1 className="w-full flex mt-8 mb-4 text-2xl text-gray-800 font-semibold">
              Nome:
              <span className="w-full flex justify-end text-gray-700 font-normal">
                {character.name ? character.name : "-"}
              </span>
            </h1>
            <p className="w-full flex mb-4 text-2xl text-gray-800 font-semibold">
              Status:
              <span className="w-full flex justify-end text-gray-700 font-normal">
                {character.status ? character.status : "-"}
              </span>
            </p>
            <p className="w-full flex mb-4 text-2xl text-gray-800 font-semibold">
              Espécie:
              <span className="w-full flex justify-end text-gray-700 font-normal">
                {character.species ? character.species : "-"}
              </span>
            </p>
            <p className="w-full flex mb-4 text-2xl text-gray-800 font-semibold">
              Tipo:
              <span className="w-full flex justify-end text-gray-700 font-normal">
                {character.type ? character.type : "-"}
              </span>
            </p>
            <p className="w-full flex mb-4 text-2xl text-gray-800 font-semibold">
              Gênero:
              <span className="w-full flex justify-end text-gray-700 font-normal">
                {character.gender ? character.gender : "-"}
              </span>
            </p>
            <p className="w-full flex flex-col mb-4 text-2xl text-gray-800 font-semibold">
              Origin:
              <ul className="ml-4 w-full flex flex-col gap-3 justify-end">
                <li className="mt-4 text-gray-700 font-normal">
                  id: {origin.id ? origin.id : "-"}
                </li>
                <li className=" text-gray-700 font-normal">
                  name: {origin.name ? origin.name : "-"}
                </li>
                <li className=" text-gray-700 font-normal">
                  type: {origin.type ? origin.type : "-"}
                </li>
                <li className=" text-gray-700 font-normal">
                  dimension: {origin.dimension ? origin.dimension : "-"}
                </li>
              </ul>
            </p>
            <p className="w-full flex flex-col mb-4 text-2xl text-gray-800 font-semibold">
              Location
              <ul className="ml-4 w-full flex flex-col gap-3 justify-end">
                <li className="mt-4 text-gray-700 font-normal">
                  id: {location.id ? location.id : "-"}
                </li>
                <li className=" text-gray-700 font-normal">
                  name: {location.name ? location.name : "-"}
                </li>
                <li className=" text-gray-700 font-normal">
                  type: {location.type ? location.type : "-"}
                </li>
                <li className=" text-gray-700 font-normal">
                  dimension: {location.dimension ? location.dimension : "-"}
                </li>
              </ul>
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};
