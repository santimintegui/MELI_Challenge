import { useLocation, useNavigate } from "react-router-dom";
import { useFetchItems } from "../hooks/fetchItems";
import ListItems from "../components/ListItems";
import Breadcumb from "../components/Breadcumb";

function ItemList() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = search.split("=")[1];

  const { items, isLoading } = useFetchItems(searchParams);

  function showInfo(id: string) {
    navigate(`/items/${id}`);
  }

  return (
    <div className="item-list">
      {!isLoading && (
        <>
          <div className="uno">
            <Breadcumb items={["Juegos", "Cocina", "Hogas"]} />
          </div>
          <div className="dos">
            <ListItems items={items} showInfo={showInfo} />
          </div>
        </>
      )}
    </div>
  );
}

export default ItemList;
