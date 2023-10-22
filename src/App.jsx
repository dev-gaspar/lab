import { useState } from 'react';
import './App.css';

function App() {

  const [revoluciones, setRevoluciones] = useState(0);
  const [potencia, setPotencia] = useState(0);
  const [tipoCadena, setTipoCadena] = useState('desconocido');
  const [ansi, setAnsi] = useState('desconocido');

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

  const ansi_25 = {
    "50": [0.05],
    "100": [0.09],
    "150": [0.13],
    "200": [0.16],
    "300": [0.23],
    "400": [0.3],
    "500": [0.37],
    "600": [0.44],
    "700": [0.5],
    "800": [0.56],
    "900": [0.62],
    "1000": [0.68],
    "1200": [0.81],
    "1400": [0.93],
    "1600": [1.05],
    "1800": [1.16],
    "2000": [1.27],
    "2500": [1.56],
    "3000": [1.84]
  }

  const ansi_35 = {
    "50": [0.16],
    "100": [0.29],
    "150": [0.41],
    "200": [0.54],
    "300": [0.78],
    "400": [1.01],
    "500": [1.24],
    "600": [1.46],
    "700": [1.68],
    "800": [1.89],
    "900": [2.1],
    "1000": [2.31],
    "1200": [2.73],
    "1400": [3.13],
    "1600": [3.53],
    "1800": [3.93],
    "2000": [4.32],
    "2500": [5.28],
    "3000": [5.64]
  }

  const ansi_40 = {
    "50": [0.37],
    "100": [0.69],
    "150": [0.99],
    "200": [1.29],
    "300": [1.85],
    "400": [2.40],
    "500": [2.93],
    "600": [3.45],
    "700": [3.97],
    "800": [4.48],
    "900": [4.98],
    "1000": [5.48],
    "1200": [6.45],
    "1400": [7.41],
    "1600": [8.36],
    "1800": [8.96],
    "2000": [7.72],
    "2500": [5.51],
    "3000": [4.17]
  }

  const ansi_41 = {
    "50": [0.20],
    "100": [0.38],
    "150": [0.55],
    "200": [0.71],
    "300": [1.02],
    "400": [1.32],
    "500": [1.61],
    "600": [1.90],
    "700": [2.18],
    "800": [2.46],
    "900": [2.74],
    "1000": [3.01],
    "1200": [3.29],
    "1400": [2.61],
    "1600": [2.14],
    "1800": [1.79],
    "2000": [1.52],
    "2500": [1.10],
    "3000": [0.83]
  }

  const ansi_50 = {
    "50": [0.72],
    "100": [1.34],
    "150": [1.92],
    "200": [2.50],
    "300": [3.61],
    "400": [4.67],
    "500": [5.71],
    "600": [6.72],
    "700": [7.73],
    "800": [8.71],
    "900": [9.69],
    "1000": [10.7],
    "1200": [12.6],
    "1400": [14.4],
    "1600": [12.8],
    "1800": [10.7],
    "2000": [9.23],
    "2500": [6, 58],
    "3000": [4.98]
  }

  const ansi_60 = {
    "50": [1.24],
    "100": [2.31],
    "150": [3.32],
    "200": [4.30],
    "300": [6.20],
    "400": [8.03],
    "500": [9.81],
    "600": [11.6],
    "700": [13.3],
    "800": [15.0],
    "900": [16.7],
    "1000": [18.3],
    "1200": [21.6],
    "1400": [18.1],
    "1600": [14.8],
    "1800": [12.4],
    "2000": [10.6],
    "2500": [7.57],
    "3000": [5.76]
  }

  const ansi_80 = {
    "50": [2.88],
    "100": [5.38],
    "150": [7.75],
    "200": [10.0],
    "300": [14.5],
    "400": [18.7],
    "500": [22.9],
    "600": [27.0],
    "700": [31.0],
    "800": [35.0],
    "900": [39.9],
    "1000": [37.7],
    "1200": [28.7],
    "1400": [22.7],
    "1600": [18.6],
    "1800": [15.6],
    "2000": [13.3],
    "2500": [9.56]
  }

  const ansi_100 = {
    "50": [5.52],
    "100": [10.3],
    "150": [14.8],
    "200": [19.2],
    "300": [27.7],
    "400": [35.9],
    "500": [43.9],
    "600": [51.7],
    "700": [59.4],
    "800": [63.0],
    "900": [52.8],
    "1000": [45.0],
    "1200": [34.3],
    "1400": [27.2],
    "1600": [22.3],
  }

  const ansi_120 = {
    "50": [9.33],
    "100": [17.4],
    "150": [25.1],
    "200": [32.5],
    "300": [46.8],
    "400": [60.6],
    "500": [74.1],
    "600": [87.3],
    "700": [89.0],
    "800": [72.8],
    "900": [61.0],
    "1000": [52.1],
    "1200": [39.6],
    "1400": [31.5],
  }

  const ansi_140 = {
    "50": [14.4],
    "100": [26.9],
    "150": [38.8],
    "200": [50.3],
    "300": [72.4],
    "400": [93.8],
    "500": [115.0],
    "600": [127.0],
    "700": [101.0],
    "800": [82.4],
    "900": [69.1],
    "1000": [59.0],
  }

  const ansi_160 = {
    "50": [20.9],
    "100": [39.1],
    "150": [56.3],
    "200": [72.9],
    "300": [105.0],
    "400": [136.0],
    "500": [166.0],
    "600": [141.0],
    "700": [112.0],
  }

  const ansi_180 = {
    "50": [28.9],
    "100": [54.0],
    "150": [77.7],
    "200": [101.0],
    "300": [145.0],
    "400": [188.0],
  }

  const ansi_200 = {
    "50": [38.4],
    "100": [71.6],
    "150": [103.0],
    "200": [134.0],
  }

  const ansi_240 = {
    "50": [61.8],
    "100": [115.0],
    "150": [166.0],
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

  const calcularAnsi = () => {

    const potenciaNumerica = parseFloat(potencia);

    if (ansi_25[revoluciones] && ansi_25[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 25');
    } else if (ansi_35[revoluciones] && ansi_35[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 35');
    } else if (ansi_40[revoluciones] && ansi_40[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 40');
    } else if (ansi_41[revoluciones] && ansi_41[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 41');
    } else if (ansi_50[revoluciones] && ansi_50[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 50');
    } else if (ansi_60[revoluciones] && ansi_60[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 60');
    } else if (ansi_80[revoluciones] && ansi_80[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 80');
    } else if (ansi_100[revoluciones] && ansi_100[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 100');
    } else if (ansi_120[revoluciones] && ansi_120[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 120');
    } else if (ansi_140[revoluciones] && ansi_140[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 140');
    } else if (ansi_160[revoluciones] && ansi_160[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 160');
    } else if (ansi_180[revoluciones] && ansi_180[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 180');
    } else if (ansi_200[revoluciones] && ansi_200[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 200');
    } else if (ansi_240[revoluciones] && ansi_240[revoluciones].includes(potenciaNumerica)) {
      setAnsi('ANSI 240');
    } else {
      setAnsi('desconocido');
    }
  }


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
          <button className="btn btn-primary my-2" onClick={(e) => {
            calcularTipoCadena();
            calcularAnsi();
          }}>Calcular</button>
          <p>
            <strong>Numero ANSI cadena: </strong>{ansi}
          </p>
          <p>
            <strong>Libricante: </strong>{tipoCadena}
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
