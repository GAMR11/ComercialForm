'use client';

import { useState, useEffect } from 'react'; // Importa useEffect
import { numeroATexto } from '../utils/numberToWords';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    nombreNegocio: 'COMERCIAL GUSMOR',
    actividad: 'Venta de electrodomésticos y muebles, motos en general.',
    direccion: 'Av. 29 de junio Barrio San Carlos',
    ruc: '0101516904001',
    celular: '0994962584',
    email: 'gustavomorales2012@hotmail.com',
    nombreDeudor: '',
    cedulaDeudor: '',
    monto: '',
    producto: '',
    plazo: '60',
    canton: 'Pedro Vicente Maldonado',
    provincia: 'Pichincha',
    marca: '',
    modelo: '',
    color: '',
    nombreGarante : '',
    cedulaGarante : '',
  });

  // useEffect se ejecuta cuando el componente se carga
  useEffect(() => {
    const fechaActual = fechaHora();
    console.log('Fecha generada:', fechaActual); // Para ver en consola

    // Actualiza el estado con la fecha
    setFormData(prev => ({
      ...prev,
      fechaEmision: fechaActual
    }));
  }, []); // El array vacío [] significa que solo se ejecuta una vez al cargar


  const fechaHora = (fechaInput = new Date()) => {
    const opciones = {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    };

    // El locale 'es-ES' añade automáticamente los conectores "de"
    const formateador = new Intl.DateTimeFormat('es-ES', opciones);

    return formateador.format(fechaInput).toUpperCase();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const montoEnTexto = formData.monto ? numeroATexto(parseFloat(formData.monto)) : '';

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Formulario */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'row', gap: '4em' }}>
      <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:'2em' }}>
          <div>
            <h2 className="text-xl font-semibold mb-4">Datos del Negocio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del Negocio
                </label>
                <input
                  type="text"
                  name="nombreNegocio"
                  value={formData.nombreNegocio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RUC
                </label>
                <input
                  type="text"
                  name="ruc"
                  value={formData.ruc}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Actividad
                </label>
                <input
                  type="text"
                  name="actividad"
                  value={formData.actividad}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Celular
                </label>
                <input
                  type="text"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-4">Datos del Deudor</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo del Deudor *
                </label>
                <input
                  type="text"
                  name="nombreDeudor"
                  value={formData.nombreDeudor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cédula del Deudor *
                </label>
                <input
                  type="text"
                  name="cedulaDeudor"
                  value={formData.cedulaDeudor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monto ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="monto"
                  value={formData.monto}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {montoEnTexto && (
                  <p className="text-sm text-gray-600 mt-1">
                    {montoEnTexto}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plazo (días)
                </label>
                <input
                  type="number"
                  name="plazo"
                  value={formData.plazo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Producto/Artículo *
                </label>
                {/* <input
                type=""
                name="producto"
                value={formData.producto}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ej: REFRIGERADORA MARCA INDURAMA MODELO RI-405 COLOR CROMA"
                required
              /> */}
                <select name="producto" onChange={handleChange} required>
                  <option value="">SELECCIONE UNA CATEGORIA</option>
                  <option value="ELECTRODOMESTICOS">ELECTRODOMESTICOS</option>
                  <option value="MOTOS">MOTOS</option>
                  <option value="MUEBLES">MUEBLES</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marca
                </label>
                <input
                  type="text"
                  name="marca"
                  value={formData.marca}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Modelo
                </label>
                <input
                  type="text"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cantón
                </label>
                <input
                  type="text"
                  name="canton"
                  value={formData.canton}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Provincia
                </label>
                <input
                  type="text"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del Garante
                </label>
                <input
                  type="text"
                  name="nombreGarante"
                  value={formData.nombreGarante}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cedula del Garante
                </label>
                <input
                  type="text"
                  name="cedulaGarante"
                  value={formData.cedulaGarante}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
      </div>

        </div>

        {/* Vista previa del pagaré CON MARCA DE AGUA */}
        <div className="bg-white rounded-lg shadow-md p-8 relative" style={{ display: 'flex', flexDirection: 'row', flex: 'flex-grap', justifyContent: 'center' }} id="pagare-preview">
          {/* MARCA DE AGUA - Este es el código nuevo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="watermark">
              <Image
                src="/logo-gusmor.png"
                alt="Comercial Gusmor"
                width={400}
                height={400}
                className="opacity-10"
                priority
              />
            </div>
          </div>

          {/* Contenido del pagaré - ahora con z-10 para estar sobre la marca de agua */}
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">{formData.nombreNegocio}</h2>
              <p className="text-sm">{formData.actividad}</p>
              <p className="text-sm">Dirección: {formData.direccion} RUC: {formData.ruc}</p>
              <p className="text-sm">celular {formData.celular}. Correo email- {formData.email}</p>
              <p className="font-bold mt-4">PAGARE A LA ORDEN DE {formData.producto}</p>
            </div>

            <div className="text-center mb-6">
              <p className="text-lg">POR <span className="font-bold">$ {formData.monto || '____'}</span></p>
            </div>

            <div className="text-justify space-y-4 leading-relaxed">
              <p>
                YO, <span className="font-bold negrita">{formData.nombreDeudor || '____________________'}</span> con
                cedula número <span className="font-bold negrita">{formData.cedulaDeudor || '____________________'}</span> Debo/emos
                y pagaré/emos solidariamente e incondicionalmente, a la orden de {formData.nombreNegocio} la
                cantidad de <span className="font-bold negrita">{formData.monto ? `${montoEnTexto} (${formData.monto})` : '__________ DÓLARES (___)'}</span>
              </p>

              <p className="font-bold negrita">
                {formData.producto + ' MARCA ' + formData.marca + ' MODELO ' + formData.modelo + ' COLOR ' + formData.color || '____________________'}
              </p>

              <p>
                La cual recibo a mi entera satisfacción, dejo expresar constancia que me obligo a pagar todo
                el capital con el interés de moratoria vigente a la fecha de vencimiento.
              </p>

              <p>
                Me obligo también a pagar todos los gastos judiciales y extrajudiciales, y honorarios
                profesionales que ocasione su cobro sin poder reclamar lo abonado, por el motivo de la
                depreciación del Artículo, muebles o motocicletas o cualquier otro producto adquirido, siendo
                suficiente prueba de los gastos la mera aseveración del acreedor, el pago no podrá hacerse por
                partes, ni aun por mis herederos o sucesores al fiel cumplimiento de lo estipulado me obligo
                con todos mis vienes presente y futuro, para el caso de juicio hago renuncia general de
                domicilios y quedo sometido a todos los jueces y tribunales en el lugar donde me encuentre o
                de la ciudad donde suscribe este pagaré a la orden en el Cantón de {formData.canton} Provincia
                de {formData.provincia} y al trámite ejecutivo o procedimiento sumario a elección del acreedor
                o del último endosatario del documento.
              </p>

              <p>
                <span className="font-bold negrita">AUTORIZACION DE RETIRO:</span> igualmente dejo en constancia y
                firmado que <span className="font-bold negrita">el/la Sr/a. {formData.nombreDeudor || '____________________'}</span> con
                cedula número <span className="font-bold negrita">{formData.cedulaDeudor || '____________________'}</span> irrevocablemente
                se me retire el artículo o muebles adquirido en <span className="font-bold negrita">{formData.nombreNegocio}</span> a
                crédito si me llegara atrasar en <span className="font-bold negrita">{formData.plazo} días</span>, por lo que mi
                compromiso es pagar mes a mes cumplidamente ratificándose una vez más el almacén puede dar por
                terminado el contrato sin ninguna solemnidad, sin reclamo alguno de los valores abonados que
                cubren la depreciación del bien o artículo, y también dejo asentado en este pagaré, todo valor
                que genere de cambio de dominio gastos judiciales, cobranza lo asumo yo como persona responsable del crédito junto con mi garante en caso de ser necesario
                como deudor solidario sin reclamo alguno.
              </p>

              <p>
                <span className="font-bold negrita">GARANTE:</span> YO <span className="font-bold negrita">{formData.nombreGarante || '____________________'}</span>  con
                cedula número <span className="font-bold negrita">{formData.cedulaGarante || '____________________'}</span> como persona que garantizo la adquisición de los articulos o motos, me comprometo a que se pague en su totalidad el monto de la deuda obtenida en <strong>{formData.nombreNegocio}</strong>, y en caso de no dar cumplimiento, me comprometo a hacerme cargo de pagar personalmente todo el saldo faltante ó devolver al <strong>{formData.nombreNegocio}</strong> el articulo sin reclamo alguno de los valores que esten cancelados por la devaluación de los articulos obtenidos, igualmente me someto a todas las clausulas de este pagaré.
              </p>

              <p>
                <span className="font-bold negrita">NOTA:</span> Las garantías de los productos que se venden en <strong>{formData.nombreNegocio}</strong>,
                dan únicamente los servicios técnicos de las Marcas autorizadas, dejando en claro que el
                almacén únicamente realiza las ventas de los mismos.
              </p>

              <p>
                <span className="font-bold negrita">REVISIÓN DEL BURO:</span> Igualmente se firma esta cláusula de autorización para consulta y publicación de los titulares de información para que obtenga cuantas veces sean necesarios de cualquier fuente de información, incluidos los buros de crédito, mi información de riesgos crediticios e igual forma la empresa <strong>COMERCIAL GUSMOR</strong> queda expresamente autorizado para que pueda transferir o entregar dicha información a los buros de crédito y/o central de riesgos si fuera pertinente.
              </p>

              <p>
                <strong>{formData.canton}, {formData.fechaEmision}</strong>
              </p>

            </div>

            <div className="flex justify-around" style={{ marginTop: '4em' }}>
              <div className="text-center">
                <div className="border-t-2 border-black w-48 mb-2"></div>
                <p className="text-sm" style={{ margin: '0px 0px' }}>{formData.nombreDeudor}</p>
                <p className="text-sm" style={{ margin: '0px 0px' }}>CI: {formData.cedulaDeudor}</p>
                <p className="text-sm" style={{ margin: '0px 0px' }}>COMPRADOR</p>
              </div>
               <div className="text-center">
                <div className="border-t-2 border-black w-48 mb-2"></div>
                <p className="text-sm" style={{ margin: '0px 0px' }}>{formData.nombreGarante}</p>
                <p className="text-sm" style={{ margin: '0px 0px' }}>CI: {formData.cedulaGarante}</p>
                <p className="text-sm" style={{ margin: '0px 0px' }}>GARANTE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de imprimir */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
          >
            Imprimir/Descargar PDF
          </button>
        </div>
      </div>
    </div>
  );
}