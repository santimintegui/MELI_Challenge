import { useParams } from "react-router-dom";
import { useFetchItemInfo } from "../hooks/fetchItemInfo";
import Item from "../components/ItemInfo";
import Breadcumb from "../components/Breadcumb";
import NotFoundResults from "../components/NotFoundResults";

function InfoView() {
  const { id } = useParams();
  const { item, categories, isLoading, error } = useFetchItemInfo(id ?? "");
  const showItem = item && categories && !isLoading;

  return (
    <div className="item-list">
      {error ? (
        <NotFoundResults />
      ) : (
        showItem && (
          <>
            <div className="uno">
              <Breadcumb items={categories} />
            </div>
            <div className="dos">
              <div className="item-container">
                <Item item={item} />
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default InfoView;
