type BreadcumbProps = {
  items: string[];
};

function Breadcumb({ items }: BreadcumbProps) {
  return (
    <div className="breadcumb-container">
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
