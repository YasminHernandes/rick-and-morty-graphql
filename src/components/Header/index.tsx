import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const handleBackButtonClick = () => history.goBack();

  return (
    <>
      <header className="w-full flex items-center py-7">
        <button
          className="rounded-lg bg-gray-300 py-2 px-4 text-gray-700 font-semibold"
          onClick={handleBackButtonClick}
        >
          voltar
        </button>
        <h1 className="text-3xl text-gray-800 font-semibold m-auto">
          Rick and Morty - Personagens
        </h1>
      </header>
    </>
  );
};
