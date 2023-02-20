export function Collection({ images, name }: any) {
  return (
    <>
      <img src={images} className="catalog__img" alt="img" />
      <span className="search__visibility">{name}</span>
    </>
  );
}
