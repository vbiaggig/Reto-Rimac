// import React, { Component } from 'react';


// class Modal extends Component {
//   render() {
//     return (
//       <div id="cobContePrinc" class="precios-aplicables-coberturas">
//         <div class="text-right">
//           <a class="close-modal" href="javascript:void(0);" data-dismiss="modal">Cerrar<img src="/productoweb/flujodomi2/images/close-modal.png" alt=""/></a>
//         </div>
//         <h4> Plan Solo Contenido (10 mil)</h4>
//         <table style="width: 100%;">
//           <thead>
//             <tr><th colspan="3" style="width: 60%;">Coberturas Principales</th></tr>
//           </thead>
//           <tbody>
//             <tr><td colspan="2">Terremoto<a class="icon" href="javascript:void(0);" onclick="verAyuda(14534);"><img src="/productoweb/flujodomi2/images/interrogante.png" alt="?"/></a><a data-toggle="modal" data-target="#modal-terremoto-ex" href="#">Ver Exclusiones</a><a href="javascript:void(0);" onclick="verDeducible(14534);">Deducibles</a></td><td style="width: 150px;">Hasta S/ 10 000</td></tr><tr><td colspan="2">Robo o Intento de Robo<a class="icon" href="javascript:void(0);" onclick="verAyuda(11126);"><img src="/productoweb/flujodomi2/images/interrogante.png" alt="?"></a>&nbsp;&nbsp;<a data-toggle="modal" data-target="#modal-robo-ex" href="#">Ver Exclusiones</a><a href="javascript:void(0);" onclick="verDeducible(11126);">Deducibles</a></td><td style="width: 150px;">Hasta S/ 10 000</td></tr></tbody><thead><tr><th colspan="3" style="width: 60%;">Coberturas Adicionales</th></tr></thead><tbody><tr><td colspan="2">Incendio (todo riesgo)<a class="icon" href="javascript:void(0);" onclick="verAyuda(11783);"><img src="/productoweb/flujodomi2/images/interrogante.png" alt="?"></a><a data-toggle="modal" data-target="#modal-incendio-ex" href="#">Ver Exclusiones</a><a href="javascript:void(0);" onclick="verDeducible(11783);">Deducibles</a></td><td style="width: 150px;">Hasta S/ 10 000</td></tr><tr><td colspan="2">Riesgos políticos y sociales<a class="icon" href="javascript:void(0);" onclick="verAyuda(11125);"><img src="/productoweb/flujodomi2/images/interrogante.png" alt="?"></a>&nbsp;&nbsp;<a data-toggle="modal" data-target="#modal-riesgo-ex" href="#">Ver Exclusiones</a><a href="javascript:void(0);" onclick="verDeducible(11125);">Deducibles</a></td><td style="width: 150px;">Hasta S/ 10 000</td></tr><tr><td colspan="2">Responsabilidad civil<a class="icon" href="javascript:void(0);" onclick="verAyuda(11787);"><img src="/productoweb/flujodomi2/images/interrogante.png" alt="?"></a>&nbsp;&nbsp;<a data-toggle="modal" data-target="#modal-responsabilidad-ex" href="#">Ver Exclusiones</a><a href="javascript:void(0);" onclick="verDeducible(11787);">Deducibles</a></td><td style="width: 150px;">Hasta S/ 3 000</td></tr><tr><td colspan="2">Rotura accidental de vidrios y cristales<a class="icon" href="javascript:void(0);" onclick="verAyuda(11814);"><img src="/productoweb/flujodomi2/images/interrogante.png" alt="?"></a>&nbsp;&nbsp;<a data-toggle="modal" data-target="#modal-rotura-ex" href="#">Ver Exclusiones</a></td><td style="width: 150px;">Hasta S/ 1 000</td></tr></tbody><thead><tr><th style="width: 60%;">Asistencias</th><th class="text-center">Monto Máximo<br>(en soles)</th><th class="text-center">Eventos<br>por año</th> </tr></thead><tbody><tr><td>Armado de muebles en el hogar</td><td class="text-right">S/ 150 por evento</td><td class="text-center" rowspan="9" style="border-left: 1px solid #949292;">3 Eventos</td></tr><tr><td>Limpieza de roller, stores</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Lavado de colchones</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Lavado de muebles</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Lavado de alfombras</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Perforación de muros para cuadros - espejos</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Instalación de lámparas, luminarias</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Reparación de goteras</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Mano de obra en pintura</td><td class="text-right">S/ 150 por evento</td></tr><tr><td>Referencia y coordinación de técnicos para fumigaciones</td><td class="text-right">CONEXIÓN</td><td class="text-right">Sin Límite</td></tr><tr><td>Referencia de técnicos en su localidad para mantenimiento en general</td><td class="text-right">CONEXIÓN</td><td class="text-right">Sin Límite</td></tr><tr><td>Reemplazo de nana (reembolso)</td><td class="text-right">S/ 100 por evento</td><td class="text-right">1 Evento</td></tr>
            
//             <tr><td>Profesor a domicilio en caso de enfermedad del niño (apoyo para ponerse al día)</td><td class="text-right">SIN LIMITE</td><td class="text-right">1 Evento</td></tr>
            
//             <tr>
//               <td>Limpieza de domicilio</td>
//               <td class="text-right">S/ 100 por evento</td>
//               <td class="text-right">1 Evento</td>
//             </tr>
//           </tbody>
//         </table>
//         <a href="#" data-toggle="modal" data-target="#modal-lista-bienes">Listado de bienes excluidos y otras exclusiones</a>
//         <a href="#" data-toggle="modal" data-target="#modal-lista-bienesNew">Inmuebles que no son materia de cobertura</a>
//         <a href="#" data-toggle="modal" data-target="#modal-lista-ex">Listado de exclusiones aplicables a todas las coberturas</a>
      
//       </div>
//         );
//       }
//     }
    
// export default Modal;