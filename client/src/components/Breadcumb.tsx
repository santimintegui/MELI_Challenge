type BreadcumbProps = {
  items: string[];
};

function Breadcumb({ items }: BreadcumbProps) {
  const emptyItems = !items || items.length === 0 ? "empty" : "";
  return (
    <div className={`breadcumb-container ${emptyItems}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const lastStyle = isLast ? "last" : "";
        return (
          <span key={index} className={lastStyle}>
            <a>{item}</a>
            {!isLast ? "  >  " : ""}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcumb;
