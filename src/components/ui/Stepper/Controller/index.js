export default function Controller({ children }) {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-3">{children}</div>
      </div>
    </section>
  );
}
