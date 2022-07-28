const notasControllers = {};


notasControllers.create = (req,res) => {
    
let porcentaje_personas = {};
let porcentaje_mujeres_posgrado= {};
let cantidad_hombres_primaria= {};
let cantidad_HM=0;
let contador=0;
let contador2=0;
let ct=0;
let response={};

let array_empleados=req.body.empleados

for (let i = 0; i < array_empleados.length; i++) {
    const empleado = array_empleados[i];
    ct=ct+1
    //calcular porcentaje de personas
    if (empleado.estudios=="primaria" || empleado.estudios=="profesional"|| empleado.estudios=="maestria" || empleado.estudios=="doctorado") {
    contador++;
    porcentaje_personas= contador*100/ct;
     
    }
else{porcentaje_personas=0}
    if (empleado.sexo=="f"  && empleado.estudios=="maestria" && empleado.sexo=="f" || empleado.estudios=="doctorado" ){
        contador2++;
        porcentaje_mujeres_posgrado=contador2*100/ct;
    }
   
    if(empleado.estudios=="profesional" && empleado.edad<25){
        cantidad_HM++;
    }
   
}
response['porcentaje personas']=porcentaje_personas
response['Porcentaje mujeres con posgrado'] =porcentaje_mujeres_posgrado
response['cantidad hombres y mujeres profesional antes de 25'] =cantidad_HM
  

res.json(response); 
 }

module.exports = notasControllers;