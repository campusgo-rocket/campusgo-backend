export const vehicleBody = {
  type: Object,
  description: 'Datos para crear un nuevo vehiculo',
  examples: {
    example: {
      value: {
        id_driver: 'nays8PlHMEp43XGgQkzw',
        color: 'negro',
        make: 'chevrolet',
        model: 'sail',
        plate_number: 'ABC123',
        type_vehicle: 'carro',
        year: 2015,
      },
      summary: 'Ejemplo de creación de vehiculo nuevo',
    },
  },
};

export const vehicleResponse = {
  status: 200,
  description: 'Creación de vehiculo exitoso',
  schema: {
    type: 'object',
    properties: {
      statusCode: { type: 'number', example: 200 },
      id_vehicle: { type: 'string', example: 'Z9L3DjDJd9FRMPLhqTLn' },
      message: { type: 'string', example: 'Vehiculo creado exitosamente.' },
    },
  },
};

export const vehicleResponseFailed = {
  status: 400,
  description: 'Error al crear el vehiculo',
  schema: {
    type: 'object',
    properties: {
      statusCode: { type: 'number', example: 400 },
      message: {
        type: 'string',
        example: 'Hubo un problema al crear el vehiculo.',
      },
    },
  },
};