
export const cubitContactDetails = {
  companyName: "Cubit",
  companyEmail: "info@cubit.com",
  companyCuit: "123456789",
};

export const onicContactDetails = {
  companyName: "Onic",
  companyEmail: "info@onic.com",
  companyCuit: "987654321",
  pointOfSale: {
    value: "2",
    label: "00002-Casa 6 B° Gubelco 0 - Villanueva, Mendoza"
  },
  typeOfReceipt: [
    {
      value: "2",
      label: "Factura C"
    },
    {
      value: "3",
      label: "Nota de Débito C"
    },
    {
      value: "4",
      label: "Nota de Crédito C"
    },
    {
      value: "5",
      label: "Recibo C"
    },
    {
      value: "120",
      label: "Factura de Crédito Electrónica MiPyMEs (FCE) C"
    },
    {
      value: "121",
      label: "Nota de Débito Electrónica MiPyMEs (FCE) C"
    },
    {
      value: "122",
      label: "Nota de Crédito Electrónica MiPyMEs (FCE) C"
    },
  ],
  conceptsToInclude: [
    {
      code: "1",
      title: "Productos",
      isService: false
    },
    {
      code: "2",
      title: "Servicios",
      isService: true
    },
    {
      code: "3",
      title: "Productos y Servicios",
      isService: true
    }
  ],
  activities: [
    {
      code: "620900",
      title: "620900 - SERVICIOS DE INFORMÁTICA N.C.P",
    },
    {
      code: "829900",
      title: "829900 - SERVICIOS EMPRESARIALES N.C.P.",
    }
  ]
};

export const amnContactDetails = {
  companyName: "AMN",
  companyEmail: "consultora@amn.com.ar",
  companyCuit: "123123123",
};
