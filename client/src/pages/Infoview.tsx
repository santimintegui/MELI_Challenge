import { useParams } from "react-router-dom";
import { useFetchItemInfo } from "../hooks/fetchItemInfo";
import Item from "../components/ItemInfo";
import PageLayout from "../components/PageLayout";

function InfoView() {
  const { id } = useParams();
  const { item, categories, isLoading, error } = useFetchItemInfo(id ?? "");
  const showItem = (item && categories && !isLoading) || false;

  return (
    <PageLayout
      error={error}
      showChildren={showItem}
      breadcumb={categories ?? []}
      isLoading={isLoading}
    >
      <div className="item-container">{item && <Item item={item} />}</div>
    </PageLayout>
  );
}

export default InfoView;
