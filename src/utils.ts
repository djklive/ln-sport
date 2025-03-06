export const formatDate = (date: Date) => {
  return date.toLocaleDateString("fr", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
