import { useLocation, useNavigate } from "react-router-dom";
import { useFetchItems } from "../hooks/fetchItems";
import ListItems from "../components/ListItems";
import PageLayout from "../components/PageLayout";

function ListView() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = search.split("=")[1];
  const { items, categories, isLoading, error } = useFetchItems(searchParams);
  const showList = (items && categories && !isLoading) || false;

  function showInfo(id: string) {
    navigate(`/items/${id}`);
  }

  return (
    <PageLayout
      error={error}
      showChildren={showList}
      breadcumb={categories ?? []}
      isLoading={isLoading}
    >
      {items && <ListItems items={items} showInfo={showInfo} />}
    </PageLayout>
  );
}

export default ListView;
