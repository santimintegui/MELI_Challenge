export function formatPrice(price: string) {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function mappingCondition(condition: string) {
  const mapping: { [key: string]: string } = {
    new: "Nuevo",
    not_specified: "No especificado",
    used: "Usado",
  };
  return mapping[condition];
}
