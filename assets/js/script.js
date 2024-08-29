const funcionIIFE = (() => {
  // patron modulo IIFE
  let funcionPrivada = (url, id) => {
    // funcion privada de la IIFE, recibe url y id
    const iframe = document.getElementById(id);
    iframe.setAttribute("src", url);
  };

  return {
    //retorna una funcion publica y realiza el llamado a la funcion privada
    funcionPublica: (url, id) => {
      funcionPrivada(url, id);
    },
  };
})();


class Multimedia {
  //clase padre "multimedia" y recibe la propiedad url
  constructor(url) {
    let _url = url; //atributo privado usando clousure mediante una variable
    this.getUrl = function () {
      return _url;
    };
  }
  setInicio() {
    //metodo que retorna un string
    return "Este metodo es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  PlayMultimedia() {
    funcionIIFE.funcionPublica(this.getUrl(), this._id);
  }
  //polimorfismo
  setInicio(tiempo) {
    const iframe = document.getElementById(this._id);
    if (iframe) {
      const url = `${this.getUrl()}?start=${tiempo}`;
      iframe.setAttribute("src", url);
    }
  }
}

let Peliculas = new Reproductor(
  "https://www.youtube.com/embed/6gk3BWgRoAY",
  "peliculas"
);
let Series = new Reproductor(
  "https://www.youtube.com/embed/H282c9q2MUU",
  "series"
);
let Musica = new Reproductor(
  "https://www.youtube.com/embed/QeYke08Xuws",
  "musica"
);

Series.PlayMultimedia();
Musica.PlayMultimedia();

// Utiliza el método “setInicio” para modificar el tiempo de inicio.
Peliculas.setInicio(30);
