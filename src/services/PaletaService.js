import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");

  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformPaleta);

export const PaletaService = {
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseTransformItem),
  create: (token) =>
    fetch(Api.createPaleta(token), { method: "POST" }).then(parseResponse),
  updtateById: (id,token) =>
    fetch(Api.updatePaletaById(id,token), { method: "PUT" }).then(parseResponse),
  deleteById: (id,token) =>
    fetch(Api.deletePaletaById(id,token), { method: "DELETE" }).then(parseResponse),
};
