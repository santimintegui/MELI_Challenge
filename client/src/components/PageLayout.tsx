import Breadcumb from "./Breadcumb";
import NotFoundResults from "./NotFoundResults";

type PageLayoutProps = {
  children: React.ReactNode;
  error: boolean;
  showChildren: boolean;
  breadcumb: string[];
  isLoading: boolean;
};

function PageLayout({
  children,
  error,
  showChildren,
  breadcumb,
  isLoading,
}: PageLayoutProps) {
  return (
    <div className="layout-container">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <NotFoundResults />
      ) : (
        showChildren && (
          <>
            <div className="breadcumb-content">
              <Breadcumb items={breadcumb} />
            </div>
            <div className="children-content">{children}</div>
          </>
        )
      )}
    </div>
  );
}

export default PageLayout;
