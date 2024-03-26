import { useParams } from "react-router-dom";
import { useFetchItemInfo } from "../hooks/fetchItemInfo";
import Item from "../components/ItemInfo";
import Breadcumb from "../components/Breadcumb";

function InfoView() {
  const { id } = useParams();
  const { item, isLoading } = useFetchItemInfo(id ?? "");

  return (
    <div className="item-list">
      {item && !isLoading && (
        <>
          <div className="uno">
            <Breadcumb items={["prueba 1", "prueba 2"]} />
          </div>
          <div className="dos">
            <div className="item-container">
              <Item item={item} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default InfoView;
