//Este programa resuelve problemas de tuberias de tipo III en donde es necesario determinar un diametro optimo para una aplicacion dada una caida de presion admisible y un caudal requerido. El algoritmo itera mediante un ciclo while el factor de friccion usando la ecuacion de Colebrook. Para cada iteracion el programa imprime el diametro calculado y el factor de friccion estimado. Finalmente, cuando el factor de friccion converge con una precision previmiente definida el ciclo se detiene.

//PROBLEMA TIPO III. CALCULO DE DIAMETRO OPTIMO. 

/*--------------------------Ingreso de parametros-----------------*/
const Q = 0.342;  //Caudal, m^3/s.
const nu = 2*10**-5; //Viscosidad cinemática, m^2/s.
const L = 100; //Longitud de tubería, m.
const hl = 8; //Pérdida de energía admisible, en m.
const e =6*10**-5; //Rugosidad del material, en m.

/*---------------Variables de proceso (No modificar)----------------------*/
const tol = 0.00005; ////Definimos el nivel de precisión 
const g = 9.81; // Gravedad, m/s^2
let f0 = 0.01; //Factor de fricción inicial.
let f; //Factor de fricción iterado.
let D; //Diámetro, m.
let Re; //Número de Reynolds

/*--------------------------Iniciamos los calculos -------------*/
document.write('El diámetro óptimo calculado es: -------cm___________f: ' + f0.toFixed(7) + '<br>');
D = ((8*f0*L*Q**2)/(hl*(3.1416**2)*9.81))**(1/5);
Re = (1.2732*Q)/(D*nu);
f = 1/(4*(Math.log10(e/(3.7*D)+2.51/(Re*f0**0.5)))**2);

/*--------------------------Comienza la iteración-----------------*/
while(Math.abs(f-f0) >= tol){ 
   f0 = f;
   D = ((8*f0*L*Q**2)/(hl*(3.1416**2)*9.81))**(1/5);
   Re = (1.2732*Q)/(D*nu);
   f = 1/(4*(Math.log10(e/(3.7*D)+2.51/(Re*f0**0.5)))**2);
   document.write('El diámetro óptimo calculado es: '+(D*100).toFixed(2)+'cm___________f: ' + f0.toFixed(7) + '<br>');
}
/*----------------------------Finaliza iteración-------------------*/
document.write('El diámetro óptimo calculado es: '+(D*100).toFixed(2)+'cm___________f: ' + f0.toFixed(7));