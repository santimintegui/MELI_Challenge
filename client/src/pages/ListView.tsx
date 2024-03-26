import { useLocation, useNavigate } from "react-router-dom";
import { useFetchItems } from "../hooks/fetchItems";
import ListItems from "../components/ListItems";
import Breadcumb from "../components/Breadcumb";
import NotFoundResults from "../components/NotFoundResults";

function ListView() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = search.split("=")[1];
  const { items, categories, isLoading, error } = useFetchItems(searchParams);
  const showList = items && categories && !isLoading;

  function showInfo(id: string) {
    navigate(`/items/${id}`);
  }

  return (
    <div className="item-list">
      {error ? (
        <NotFoundResults />
      ) : (
        showList && (
          <>
            <div className="uno">
              <Breadcumb items={categories} />
            </div>
            <div className="dos">
              <ListItems items={items} showInfo={showInfo} />
            </div>
          </>
        )
      )}
    </div>
  );
}

export default ListView;
