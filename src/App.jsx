import { useState } from 'react';
import './App.css';

function App() {

  const [revoluciones, setRevoluciones] = useState(0);
  const [potencia, setPotencia] = useState(0);
  const [tipoCadena, setTipoCadena] = useState('desconocido');

  const CadenasTipoA = {
    "50": [0.05, 0.16, 0.37, 0.20, 0.72, 1.24, 2.88, 5.52, 9.33],
    "100": [0.09, 0.29, 0.69, 0.38, 1.34, 2.31, 5.38],
    "150": [0.13, 0.41, 0.99, 0.55, 1.92, 3.32],
    "200": [0.16, 0.54, 1.29, 0.71, 2.50, 4.30],
    "300": [0.23, 0.78, 1.85, 1.02],
    "400": [0.30, 1.01],
    "500": [0.37, 1.24],
    "600": [0.44, 1.46],
    "700": [0.50],
    "800": [0.56],
    "900": [0.62],
    "1000": [0.68],
    "1200": [0.81],
    "1400": [0.93],
    "1600": [1.05]
  }

  const CadenasTipoB = {
    "50": [14.4, 20.9, 28.9, 38.4, 61.8],
    "100": [10.3, 17.4, 26.9, 39.1, 54.0, 71.6, 115.0],
    "150": [7.75, 14.8, 25.1, 38.8, 56.3, 77.7, 103.0, 166.0],
    "200": [10.0, 19.2, 32.5, 50.3, 72.9, 101.0, 134.0],
    "300": [3.61, 6.20, 14.5, 27.7, 46.8, 72.4, 105.0],
    "400": [2.40, 1.32, 4.67, 8.03, 18.7, 35.9, 60.6, 93.8],
    "500": [2.93, 1.61, 5.71, 9.81, 22.9, 43.9, 74.1],
    "600": [3.45, 1.90, 6.72, 11.6, 27.0, 51.7],
    "700": [1.68, 3.97, 2.18, 7.73, 13.3, 31.0, 59.4],
    "800": [1.89, 4.48, 2.46, 8.71, 15.0, 35.0],
    "900": [2.10, 4.98, 2.74, 9.69, 16.7, 39.9],
    "1000": [2.31, 5.48, 3.01, 10.7, 18.3, 37.7],
    "1200": [2.73, 6.45, 3.29, 12.6, 21.6],
    "1400": [3.13, 7.41, 2.61, 14.4, 18.1],
    "1600": [3.53, 8.36, 2.14, 12.8, 21.6],
    "1800": [1.16, 3.93, 8.96, 1.79, 10.7, 18.1],
    "2000": [1.27, 4.32, 7.72, 1.52, 9.23, 14.8],
    "2500": [1.56, 5.28, 5.51, 1.10],
    "3000": [1.84, 5.64, 4.17, 0.83]
  }

  const CadenasTipoC = {
    "300": [145.0],
    "400": [136.0, 188.0],
    "500": [115.0, 166.0],
    "600": [87.3, 127.0, 141.0],
    "700": [89.0, 101.0, 112.0],
    "800": [63.0, 72.8, 82.4],
    "900": [52.8, 61.0, 69.1],
    "1000": [45.0, 52.1, 59.0],
    "1200": [28.7, 34.3, 39.6],
    "1400": [22.7, 27.2, 31.5],
    "1600": [18.6, 22.3],
    "1800": [12.4, 15.6],
    "2000": [10.6, 13.3],
    "2500": [6.58, 7.57, 9.56],
    "3000": [4.98, 5.76]
  }

  const calcularTipoCadena = () => {

    const potenciaNumerica = parseFloat(potencia);

    if (CadenasTipoA[revoluciones] && CadenasTipoA[revoluciones].includes(potenciaNumerica)) {
      setTipoCadena('Tipo A');
    } else if (CadenasTipoB[revoluciones] && CadenasTipoB[revoluciones].includes(potenciaNumerica)) {
      setTipoCadena('Tipo B');
    } else if (CadenasTipoC[revoluciones] && CadenasTipoC[revoluciones].includes(potenciaNumerica)) {
      setTipoCadena('Tipo C');
    } else {
      setTipoCadena('desconocido');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row">
        <div className="col-md-6">
          <h1>Calculadora de Cadenas</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="revoluciones" className="form-label">Revoluciones (RPM):</label>
              <input
                type="number"
                id="revoluciones"
                className="form-control"
                value={revoluciones}
                onChange={e => setRevoluciones(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="potencia" className="form-label">Potencia nominal:</label>
              <input
                type="number"
                id="potencia"
                className="form-control"
                value={potencia}
                onChange={e => setPotencia(e.target.value)}
              />
            </div>
          </form>
          <button className="btn btn-primary my-2" onClick={calcularTipoCadena}>Calcular</button>
          <p>
            <strong>Cadena: </strong>{tipoCadena}
          </p>
        </div>
        <div className="col-md-6">
          <img className='img-fluid p-2' src='../img.jpg' alt="imagen" />
        </div>
      </div>
    </div>
  );
}

export default App;
