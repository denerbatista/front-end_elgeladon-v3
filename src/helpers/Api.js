const PaletaContext = {
    paletaEndpoint: () => `${Api.baseUrl}/paletas`,
    paletaLista: () => `${PaletaContext.paletaEndpoint()}/find-paletas`,
    paletaById: (id) => `${PaletaContext.paletaEndpoint()}/find-paleta/${id}`,
    createPaleta: (token) => `${PaletaContext.paletaEndpoint()}/create/${token}`,
    updatePaletaById: (id,token) => `${PaletaContext.paletaEndpoint()}/update/${id},${token}`,
    deletePaletaById: (id,token) => `${PaletaContext.paletaEndpoint()}/delete/${id},${token}`,
  };
  
  export const Api = {
    baseUrl: "https://api-elgeladon-v2.onrender.com",
    ...PaletaContext,
  };

  