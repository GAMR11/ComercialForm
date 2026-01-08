'use client';

import { useState, useEffect } from 'react';
import { numeroATexto } from '../utils/numberToWords';
import Image from 'next/image';
import './page.css'; // Importamos los estilos CSS

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
    nombreGarante: '',
    cedulaGarante: '',
  });

  useEffect(() => {
    const fechaActual = fechaHora();
    console.log('Fecha generada:', fechaActual);

    setFormData(prev => ({
      ...prev,
      fechaEmision: fechaActual
    }));
  }, []);

  const fechaHora = (fechaInput = new Date()) => {
    const opciones = {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    };

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
    <div className="container-principal">
      <div className="contenedor-max">
        {/* Formulario */}
        <div className="formulario-contenedor">
          <div className="formularios-wrapper">
            {/* Datos del Negocio */}
            <div className="seccion-formulario">
              <h2 className="titulo-seccion">Datos del Negocio</h2>
              <div className="grid-formulario">
                <div className="campo-formulario">
                  <label className="etiqueta-campo">Nombre del Negocio</label>
                  <input
                    type="text"
                    name="nombreNegocio"
                    value={formData.nombreNegocio}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">RUC</label>
                  <input
                    type="text"
                    name="ruc"
                    value={formData.ruc}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario campo-completo">
                  <label className="etiqueta-campo">Actividad</label>
                  <input
                    type="text"
                    name="actividad"
                    value={formData.actividad}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario campo-completo">
                  <label className="etiqueta-campo">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Celular</label>
                  <input
                    type="text"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>
              </div>
            </div>

            {/* Datos del Deudor */}
            <div className="seccion-formulario">
              <h2 className="titulo-seccion">Datos del Deudor</h2>
              <div className="grid-formulario">
                <div className="campo-formulario">
                  <label className="etiqueta-campo">Nombre Completo del Deudor *</label>
                  <input
                    type="text"
                    name="nombreDeudor"
                    value={formData.nombreDeudor}
                    onChange={handleChange}
                    className="input-campo"
                    required
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Cédula del Deudor *</label>
                  <input
                    type="text"
                    name="cedulaDeudor"
                    value={formData.cedulaDeudor}
                    onChange={handleChange}
                    className="input-campo"
                    required
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Monto ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    name="monto"
                    value={formData.monto}
                    onChange={handleChange}
                    className="input-campo"
                    required
                  />
                  {montoEnTexto && (
                    <p className="texto-monto">{montoEnTexto}</p>
                  )}
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Plazo (días)</label>
                  <input
                    type="number"
                    name="plazo"
                    value={formData.plazo}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario campo-completo">
                  <label className="etiqueta-campo">Producto/Artículo *</label>
                  <select 
                    name="producto" 
                    onChange={handleChange} 
                    className="select-campo"
                    required
                  >
                    <option value="">SELECCIONE UNA CATEGORIA</option>
                    <option value="ELECTRODOMESTICOS">ELECTRODOMESTICOS</option>
                    <option value="MOTOS">MOTOS</option>
                    <option value="MUEBLES">MUEBLES</option>
                  </select>
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Marca</label>
                  <input
                    type="text"
                    name="marca"
                    value={formData.marca}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Modelo</label>
                  <input
                    type="text"
                    name="modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Color</label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Cantón</label>
                  <input
                    type="text"
                    name="canton"
                    value={formData.canton}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Provincia</label>
                  <input
                    type="text"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Nombre del Garante</label>
                  <input
                    type="text"
                    name="nombreGarante"
                    value={formData.nombreGarante}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>

                <div className="campo-formulario">
                  <label className="etiqueta-campo">Cédula del Garante</label>
                  <input
                    type="text"
                    name="cedulaGarante"
                    value={formData.cedulaGarante}
                    onChange={handleChange}
                    className="input-campo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vista previa del pagaré */}
        <div className="pagare-contenedor" id="pagare-preview">
          {/* MARCA DE AGUA */}
          <div className="marca-agua-contenedor">
            <div className="watermark">
              <Image
                src="/logo-gusmor.png"
                alt="Comercial Gusmor"
                width={400}
                height={400}
                className="imagen-marca"
                priority
              />
            </div>
          </div>

          {/* Contenido del pagaré */}
          <div className="pagare-contenido">
            <div className="pagare-encabezado">
              <h2 className="pagare-titulo negrita">{formData.nombreNegocio}</h2>
              <p className="pagare-texto-pequeno negrita">{formData.actividad}</p>
              <p className="pagare-texto-pequeno negrita">Dirección: {formData.direccion} RUC: {formData.ruc}</p>
              <p className="pagare-texto-pequeno negrita">celular {formData.celular}. Correo email- {formData.email}</p>
              <p className="pagare-subtitulo">PAGARE A LA ORDEN DE {formData.producto}</p>
            </div>

            <div className="pagare-monto">
              <p className="texto-monto-grande">POR <span className="negrita">$ {formData.monto || '____'}</span></p>
            </div>

            <div className="pagare-cuerpo">
              <p>
                YO, <span className="negrita">{formData.nombreDeudor || '____________________'}</span> con
                cedula número <span className="negrita">{formData.cedulaDeudor || '____________________'}</span> Debo/emos
                y pagaré/emos solidariamente e incondicionalmente, a la orden de {formData.nombreNegocio} la
                cantidad de <span className="negrita">{formData.monto ? `${montoEnTexto} ($${formData.monto})` : '__________ DÓLARES ($___)'}</span>
              </p>

              <p className="negrita">
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
                <span className="negrita">AUTORIZACION DE RETIRO:</span> igualmente dejo en constancia y
                firmado que <span className="negrita">el/la Sr/a. {formData.nombreDeudor || '____________________'}</span> con
                cedula número <span className="negrita">{formData.cedulaDeudor || '____________________'}</span> irrevocablemente
                se me retire el artículo o muebles adquirido en <span className="negrita">{formData.nombreNegocio}</span> a
                crédito si me llegara atrasar en <span className="negrita">{formData.plazo} días</span>, por lo que mi
                compromiso es pagar mes a mes cumplidamente ratificándose una vez más el almacén puede dar por
                terminado el contrato sin ninguna solemnidad, sin reclamo alguno de los valores abonados que
                cubren la depreciación del bien o artículo, y también dejo asentado en este pagaré, todo valor
                que genere de cambio de dominio gastos judiciales, cobranza lo asumo yo como persona responsable del crédito junto con mi garante en caso de ser necesario
                como deudor solidario sin reclamo alguno.
              </p>

              <p>
                <span className="negrita">GARANTE:</span> YO <span className="negrita">{formData.nombreGarante || '____________________'}</span> con
                cedula número <span className="negrita">{formData.cedulaGarante || '____________________'}</span> como persona que garantizo la adquisición de los articulos o motos, me comprometo a que se pague en su totalidad el monto de la deuda obtenida en <strong>{formData.nombreNegocio}</strong>, y en caso de no dar cumplimiento, me comprometo a hacerme cargo de pagar personalmente todo el saldo faltante ó devolver al <strong>{formData.nombreNegocio}</strong> el articulo sin reclamo alguno de los valores que esten cancelados por la devaluación de los articulos obtenidos, igualmente me someto a todas las clausulas de este pagaré.
              </p>

              <p>
                <span className="negrita">NOTA:</span> Las garantías de los productos que se venden en <strong>{formData.nombreNegocio}</strong>,
                dan únicamente los servicios técnicos de las Marcas autorizadas, dejando en claro que el
                almacén únicamente realiza las ventas de los mismos.
              </p>

              <p>
                <span className="negrita">REVISIÓN DEL BURO:</span> Igualmente se firma esta cláusula de autorización para consulta y publicación de los titulares de información para que obtenga cuantas veces sean necesarios de cualquier fuente de información, incluidos los buros de crédito, mi información de riesgos crediticios e igual forma la empresa <strong>COMERCIAL GUSMOR</strong> queda expresamente autorizado para que pueda transferir o entregar dicha información a los buros de crédito y/o central de riesgos si fuera pertinente.
              </p>

              <p>
                <strong>{formData.canton}, {formData.fechaEmision}</strong>
              </p>
            </div>

            <div className="firmas-contenedor">
              <div className="firma-item">
                <div className="linea-firma"></div>
                <p className="texto-firma">{formData.nombreDeudor}</p>
                <p className="texto-firma">CI: {formData.cedulaDeudor}</p>
                <p className="texto-firma">COMPRADOR</p>
              </div>
              <div className="firma-item">
                <div className="linea-firma"></div>
                <p className="texto-firma">{formData.nombreGarante}</p>
                <p className="texto-firma">CI: {formData.cedulaGarante}</p>
                <p className="texto-firma">GARANTE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de imprimir */}
        <div className="boton-contenedor">
          <button onClick={() => window.print()} className="boton-imprimir">
            Imprimir/Descargar PDF
          </button>
        </div>
      </div>
    </div>
  );
}