import { useParams } from "react-router-dom";
import { useFetchItemInfo } from "../hooks/fetchItemInfo";
import Item from "../components/ItemInfo";
import Breadcumb from "../components/Breadcumb";

function InfoView() {
  const { id } = useParams();
  const { data, isLoading } = useFetchItemInfo(id ?? "");
  console.log({ data });

  return (
    <div className="item-list">
      {!isLoading && (
        <>
          <div className="uno">
            <Breadcumb items={["Juegos", "Cocina", "Hogas"]} />
          </div>
          <div className="dos">
            <div className="item-container">
              {!isLoading && <Item item={data.data.item} />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default InfoView;
