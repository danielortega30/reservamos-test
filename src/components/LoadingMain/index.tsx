import "./index.css";
export const LoadingMain = () => {
  return (
    <div className="main-loading">
      <div className="loader-container">
        <div className="cloud-content">
          <div id="cloud"></div>
        </div>
        <p className="loader-text">Cargando...</p>
      </div>
    </div>
  );
};
