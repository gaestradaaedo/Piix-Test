import { Injectable } from '@angular/core';

import { CoverageModel } from '../models/coverage.model';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  private coverages: CoverageModel[] = [
    {
      category : "Coberturas y asistencias",
      name : "Renta diaria por hospitalización",
      imageUrl : "../assets/index/icons/hospital-rent.svg",
      description : "En caso de accidente que ocasione internarse en hospital para tratamiento médico o quirúrgico, se pagará al asegurado renta hasta por 90 días."
    },
    {
      category : "Coberturas y asistencias",
      name : "Reembolzo de gastos médicos por accidente",
      imageUrl : "../assets/index/icons/charges-refund.svg",
      description : "A consecuencia de un accidente, se reembolsarán los gastos generados por tratamiento médico, intervención quirúrgica, hospitalización, uso de ambulancia, medicinas."
    },
    {
      category : "Coberturas y asistencias",
      name : "Indemnización diaria por incapacidad",
      imageUrl : "../assets/index/icons/disability-compensation.svg",
      description : "Si un accidente deriva en incapacidad, se pagará al asegurado indemnización diaria hasta por 365 días en caso de incapacidad total, y del 50% hasta 182 días en caso de incapacidad parcial."
    },
    {
      category : "Coberturas y asistencias",
      name : "Invalidez total y permanente",
      imageUrl : "../assets/index/icons/permanent-disability.svg",
      description : "Cubre en caso de que un accidente ocasione la pérdida de las capacidades laborales."
    },
    {
      category : "Coberturas y asistencias",
      name : "Pérdidas orgánicas",
      imageUrl : "../assets/index/icons/organic-losses.svg",
      description : "Cubre al asegurado si en caso de accidente, sufre pérdida de miembros. Se pagarán los porcentajes establecidos conforme a la Tabla de Pérdidas Orgánicas “B”."
    },
    {
      category : "Coberturas y asistencias",
      name : "Servicio funerario",
      imageUrl : "../assets/index/icons/funerary-service.svg",
      description : "En caso de fallecimiento del asegurado estarán cubiertos los servicios funerarios, sea por muerte natural o accidental."
    },
    {
      category : "Coberturas y asistencias",
      name : "Muerte accidental",
      imageUrl : "../assets/index/icons/accidental-death.svg",
      description : "Cubre al asegurado en caso de que ocurra un accidente que le ocasione la muerte."
    },
    {
      category : "Redes médicas y servicios de salud",
      name : "Servicio de ambulancia",
      imageUrl : "../assets/index/icons/ambulance.svg",
      description : "Brinda dos eventos al año sin costo y los servicios subsecuentes se aplicarán con costos preferenciales."
    },
    {
      category : "Redes médicas y servicios de salud",
      name : "Chequeo anual (check up)",
      imageUrl : "../assets/index/icons/check-up.svg",
      description : "Brinda servicio de examen general de orina, química sanguínea de 3 elementos, factor RH, grupo sanguíneo y biometría hermética, una vez al año."
    },
    {
      category : "Redes médicas y servicios de salud",
      name : "Cobertura visual",
      imageUrl : "../assets/index/icons/visual-coverage.svg",
      description : "Brinda servicio médico de atención visual con descuentos desde 5% hasta 50%."
    },
    {
      category : "Redes médicas y servicios de salud",
      name : "Red odontológica",
      imageUrl : "../assets/index/icons/dentist.svg",
      description : "Red de dentistas que otorgan tratamientos dentales con bajos costos, una consulta dental sin costo y una limpieza dental con profilaxis sencilla."
    },
    {
      category : "Redes médicas y servicios de salud",
      name : "Descuentos en laboratorios",
      imageUrl : "../assets/index/icons/discounts.svg",
      description : "Proporciona descuentos desde 5% hasta 50% en laboratorios, gabinetes, hospitales, aparatos ortopédicos, aparatos auditivos, enfermería, etc."
    },
    {
      category : "Asistencia vía telefónica",
      name : "Asistencia legal",
      imageUrl : "../assets/index/icons/legal-assistance.svg",
      description : "Asistencia ilimitada por abogados certificados en materia civil, penal, laboral mercantil y fiscal, duración máxima de 20 minutos por llamada."
    },
    {
      category : "Asistencia vía telefónica",
      name : "Asistencia en tecnologías de la información",
      imageUrl : "../assets/index/icons/tecnologic-assistance.svg",
      description : "Asistencia de un Ingeniero en Sistemas en descarga de aplicaciones, configuración de email, móvil, wifi, antivirus, recuperación de datos, etc."
    },
    {
      category : "Asistencia vía telefónica",
      name : "Asistencia nutricional",
      imageUrl : "../assets/index/icons/nutricional-assistance.svg",
      description : "Asistencia por nutriólogos certificados para pacientes de bajo peso, sobrepeso, obesidad grado I y II, recomendación de dietas y detección de trastornos alimenticios."
    },
    {
      category : "Asistencia vía telefónica",
      name : "Asistencia veterinaria",
      imageUrl : "../assets/index/icons/veterinary-assistance.svg",
      description : "Asistencia por un veterinario certificado sobre información y recomendaciones de alimentos, posibles enfermedades, consultas, estética canina, guarderías, etc."
    },
    {
      category : "Asistencias a domicilio",
      name : "Consultas médicas a domicilio",
      imageUrl : "../assets/index/icons/home-consultations.svg",
      description : "Brinda dos eventos al año sin costo y los servicios subsecuentes se aplicarán con costos preferenciales."
    },
    {
      category : "Asistencias a domicilio",
      name : "Consultas veterinarias a domicilio",
      imageUrl : "../assets/index/icons/veterinary-consultation.svg",
      description : "Brinda una consulta veterinaria a domicilio al año sin costo con previa cita. Las subsecuentes con costo preferencial."
    },
    {
      category : "Asistencias a domicilio",
      name : "Asistencia en el hogar",
      imageUrl : "../assets/index/icons/home-assistance.svg",
      description : "Brinda servicios de plomería, cerrajería, electricidad y vidriería en el interior de la casa habitación. Limitado a  un evento al año por $450 y máximo 2 horas."
    },
    {
      category : "Asistencias a domicilio",
      name : "Asistencia víal",
      imageUrl : "../assets/index/icons/roadside-assistance.svg",
      description : "Brinda servicio de arrastre en grúa, paso de corriente, cambio de llanta y envío de combustible por avería o falla mecánica del vehículo, una vez al año."
    }
  ];

  constructor() { }

  createCoverages(){
    return this.coverages;
  }
}
