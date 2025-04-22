import { Test, Question } from '../types';

export const tests: Test[] = [
  {
    id: '1',
    titulo: 'Test 1',
    descripcion: 'Primer test de oposición con 79 preguntas normales (1 punto) y 28 supuestos prácticos (4 puntos).',
    questions: [
      {
        id: '1',
        texto: '¿Qué mayoría es necesaria para aprobar una ley orgánica?',
        tipo: 'normal',
        opciones: [
          { texto: 'Mayoría cualificada de tres quintos', correcta: false },
          { texto: 'Mayoría simple', correcta: false },
          { texto: 'Mayoría absoluta', correcta: true },
          { texto: 'Mayoría cualificada de dos tercios', correcta: false }
        ]
      },
      {
        id: '2',
        texto: '¿Qué rango normativo tienen los Estatutos de Autonomía?',
        tipo: 'normal',
        opciones: [
          { texto: 'Ley Ordinaria', correcta: false },
          { texto: 'Ley Orgánica', correcta: true },
          { texto: 'Real Decreto', correcta: false },
          { texto: 'Real Decreto-Ley', correcta: false }
        ]
      },
      {
        id: '3',
        texto: '¿Qué órgano tiene la potestad legislativa en las Comunidades Autónomas?',
        tipo: 'normal',
        opciones: [
          { texto: 'Diputación Provincial', correcta: false },
          { texto: 'Consejo de Gobierno', correcta: false },
          { texto: 'Parlamento autonómico', correcta: true },
          { texto: 'Tribunal Superior de Justicia', correcta: false }
        ]
      },
      {
        id: '4',
        texto: '¿Dónde tienen su sede las tres salas de lo Contencioso-Administrativo del Tribunal Superior de Justicia de Andalucía?',
        tipo: 'normal',
        opciones: [
          { texto: 'Las tres en Sevilla', correcta: false },
          { texto: 'En Sevilla, Córdoba y Granada', correcta: false },
          { texto: 'En Sevilla, Málaga y Granada', correcta: true },
          { texto: 'Las tres en Granada', correcta: false }
        ]
      },
      {
        id: '5',
        texto: 'Según la Ley 9/2007, de 22 de octubre, de la Administración de la Junta de Andalucía, entre los principios que rigen las relaciones de la Administración de la Junta de Andalucía con la ciudadanía a través de redes abiertas de telecomunicación se encuentran:',
        tipo: 'normal',
        opciones: [
          { texto: 'Limitación de acceso y simplificación administrativa', correcta: false },
          { texto: 'Agilización y gratuidad en los trámites administrativos', correcta: false },
          { texto: 'Accesibilidad universal y confidencialidad en el tratamiento de la información', correcta: true },
          { texto: 'Seguridad y autenticidad en orden a la identificación de una parte y el objeto de la comunicación', correcta: false }
        ]
      },
      {
        id: '6',
        texto: 'Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las notificaciones:',
        tipo: 'normal',
        opciones: [
          { texto: 'Se practicaran por medios electrónicos, especialmente las que contengan medios de pago a favor de los obligados, tales como cheques', correcta: false },
          { texto: 'Se practicarán preferentemente por medios no electronicos', correcta: false },
          { texto: 'Deberán ser cursadas dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado', correcta: true },
          { texto: 'Deberán contener un resumen de la resolución', correcta: false }
        ]
      },
      {
        id: '7',
        texto: 'Según la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, los contratos de adquisición de programas de ordenador desarrollados a medida, se considerarán:',
        tipo: 'normal',
        opciones: [
          { texto: 'Contratos mixtos', correcta: false },
          { texto: 'Contratos de suministro', correcta: false },
          { texto: 'Contratos tecnológicos', correcta: false },
          { texto: 'Contratos de servicios', correcta: true }
        ]
      },
      {
        id: '8',
        texto: 'Los Estatutos de la Agencia Digital de Andalucia se aprueban por:',
        tipo: 'normal',
        opciones: [
          { texto: 'Resoluión 127/2020 de 15 de Enero', correcta: false },
          { texto: 'Decreto 128/2021 de 30 de Marzo', correcta: true },
          { texto: 'Ley Orgánica 1/2022', correcta: false },
          { texto: 'RD 128/2019 de 30 de Marzo', correcta: false }
        ]
      },
      {
        id: '9',
        texto: 'El centro de Ciberseguridad de Andalucía se encuentra físicamente ubicado en:',
        tipo: 'normal',
        opciones: [
          { texto: 'No tiene ubicación física, está en la nube', correcta: false },
          { texto: 'Sevilla capital', correcta: false },
          { texto: 'Granada', correcta: false },
          { texto: 'Málaga', correcta: true }
        ]
      },
      {
        id: '10',
        texto: '¿Cuál es un objetivo de la Estrategia Andaluza de Inteligencia Artificial 2030?',
        tipo: 'normal',
        opciones: [
          { texto: 'Impedir la apertura y compartición de datos', correcta: false },
          { texto: 'Convertir a Andalucía en un hub de referencia en materia de IA en Europa', correcta: true },
          { texto: 'Dar a conocer a la ciudadanía andaluza y su tejido empresarial los errores y problemas del uso de la IA, impidiendo que la utilicen', correcta: false },
          { texto: 'Adoptar medidas para impedir el uso de la IA en los procesos internos de la Administración Andaluza la mejora de la calidad de los servicios públicos a la ciudadanía', correcta: false }
        ]
      },
      {
        id: '11',
        texto: '¿Cual de los siguientes es un órgano de la Agencia Digital de Andalucia?',
        tipo: 'normal',
        opciones: [
          { texto: 'Consejo rector', correcta: false },
          { texto: 'Dirección General de Estrategia Digital', correcta: false },
          { texto: 'Consejo Asesor', correcta: false },
          { texto: 'Todos son órganos de la Agencia Digital', correcta: true }
        ]
      },
      {
        id: '12',
        texto: '¿En qué artículo del Estatuto de Andalucía se garantiza la igualdad de oportunidades entre hombres y mujeres en todos los ámbitos?',
        tipo: 'normal',
        opciones: [
          { texto: '8', correcta: false },
          { texto: '12', correcta: false },
          { texto: '15', correcta: true },
          { texto: '17', correcta: false }
        ]
      },
      {
        id: '13',
        texto: '¿Cuál de los siguientes conceptos es fundamental en la ciberseguridad?',
        tipo: 'normal',
        opciones: [
          { texto: 'Latencia', correcta: false },
          { texto: 'Encriptación', correcta: true },
          { texto: 'Interoperabilidad', correcta: false },
          { texto: 'Velocidad de las transacciones', correcta: false }
        ]
      },
      {
        id: '14',
        texto: '¿Cuál es la característica principal de la tecnología 5G?',
        tipo: 'normal',
        opciones: [
          { texto: 'Menor latencia y mayor velocidad de transmisión de datos', correcta: true },
          { texto: 'Mayor duración de la batería', correcta: false },
          { texto: 'Menor coste', correcta: false },
          { texto: 'Mayor seguridad', correcta: false }
        ]
      },
      {
        id: '15',
        texto: '¿Qué es la codificación de fuente de Huffman?',
        tipo: 'normal',
        opciones: [
          { texto: 'Un método para representar datos de manera eficiente', correcta: true },
          { texto: 'Un método para aumentar la velocidad de transmisión', correcta: false },
          { texto: 'Un método para reducir la interferencia', correcta: false },
          { texto: 'Un método para detectar y corregir errores', correcta: false }
        ]
      },
      {
        id: '16',
        texto: '¿Qué técnica de compresión utiliza el algoritmo LZW?',
        tipo: 'normal',
        opciones: [
          { texto: 'diferencial', correcta: false },
          { texto: 'con pérdida', correcta: false },
          { texto: 'sin pérdida', correcta: true },
          { texto: 'predictiva', correcta: false }
        ]
      },
      {
        id: '17',
        texto: '¿Qué tipo de algoritmo se llama a sí mismo durante su ejecución?',
        tipo: 'normal',
        opciones: [
          { texto: 'Algoritmo iterativo', correcta: false },
          { texto: 'Algoritmo secuencial', correcta: false },
          { texto: 'Algoritmo recursivo', correcta: true },
          { texto: 'Algoritmo paralelo', correcta: false }
        ]
      },
      {
        id: '18',
        texto: '¿Qué resultado da esta operación en álgebra de Boole: (1101011 XOR 0110001) AND 0111011?',
        tipo: 'normal',
        opciones: [
          { texto: '0111010', correcta: false },
          { texto: '1011010', correcta: false },
          { texto: '0011011', correcta: false },
          { texto: '0011010', correcta: true }
        ]
      },
      {
        id: '19',
        texto: '¿Qué mide la entropía en Teoría de la Información?',
        tipo: 'normal',
        opciones: [
          { texto: 'La velocidad a la que se transmite información por un canal', correcta: false },
          { texto: 'La cantidad de energía necesaria para procesar un conjunto predefinido de datos', correcta: false },
          { texto: 'La calidad del mensaje transmitido en un sistema de información', correcta: false },
          { texto: 'La incertidumbre de una fuente de información', correcta: true }
        ]
      },
      {
        id: '20',
        texto: '¿Qué resultado da esta operación en álgebra de Boole: NOT (1001001101 XOR 0010111011)?',
        tipo: 'normal',
        opciones: [
          { texto: '0100001001', correcta: true },
          { texto: '1001001101', correcta: false },
          { texto: '0110110010', correcta: false },
          { texto: '1011110110', correcta: false }
        ]
      },
      {
        id: '21',
        texto: '¿Cuál de las siguientes interfaces ofrece el mayor ancho de banda para la transferencia de datos entre componentes internos de un ordenador?',
        tipo: 'normal',
        opciones: [
          { texto: 'SATA III', correcta: false },
          { texto: 'USB 3.2 Gen 2x2', correcta: false },
          { texto: 'PCI', correcta: false },
          { texto: 'PCIe Gen5', correcta: true }
        ]
      },
      {
        id: '22',
        texto: '¿Cuál de las siguientes tecnologías permite a una unidad de almacenamiento SSD alcanzar velocidades de lectura y escritura extremadamente altas?',
        tipo: 'normal',
        opciones: [
          { texto: 'PLP', correcta: false },
          { texto: 'SLC NAND', correcta: true },
          { texto: 'TLC NAND', correcta: false },
          { texto: 'QLC NAND', correcta: false }
        ]
      },
      {
        id: '23',
        texto: '¿Qué es la memoria caché L1?',
        tipo: 'normal',
        opciones: [
          { texto: 'Una memoria temporal de alto rendimiento situada en el procesador', correcta: true },
          { texto: 'La unidad de almacenamiento donde reside el sistema operativo', correcta: false },
          { texto: 'La memoria ROM que contiene la BIOS del equipo', correcta: false },
          { texto: 'El módulo de memoria RAM ubicado en la ranura número 1 de la placa base', correcta: false }
        ]
      },
      {
        id: '24',
        texto: '¿Qué significa DDR en el contexto de la memoria RAM?',
        tipo: 'normal',
        opciones: [
          { texto: 'Dynamic Digital Register (Registro Dinámico Digital)', correcta: false },
          { texto: 'Double Data Rate (Tasa de Doble Transferencia de Datos)', correcta: true },
          { texto: 'Data Delivery Rate (Tasa de Entrega de Datos)', correcta: false },
          { texto: 'Data-Driven Reliability (Fiabilidad Impulsada por Datos)', correcta: false }
        ]
      },
      {
        id: '25',
        texto: '¿Cuál seria una característica de una estructura de datos basada en una Pila?',
        tipo: 'normal',
        opciones: [
          { texto: 'Organización en base a primero en entrar, primero en salir (FIFO)', correcta: false },
          { texto: 'Organización en base a ultimo en entrar, primero en salir (LIFO)', correcta: true },
          { texto: 'Organización en base a filas y columnas', correcta: false },
          { texto: 'Organización en base a pares claves-valor', correcta: false }
        ]
      },
      {
        id: '26',
        texto: '¿Cuál de los siguientes NO corresponde a un formato de archivo comprimido?',
        tipo: 'normal',
        opciones: [
          { texto: 'RAR', correcta: false },
          { texto: 'TAR', correcta: false },
          { texto: 'ZAR', correcta: true },
          { texto: 'ZIP', correcta: false }
        ]
      },
      {
        id: '27',
        texto: '¿Cuál de los siguientes algoritmos es un algoritmo de búsqueda en grafos?',
        tipo: 'normal',
        opciones: [
          { texto: 'Quicksort', correcta: false },
          { texto: 'DFS', correcta: true },
          { texto: 'Mergesort', correcta: false },
          { texto: 'Burbuja', correcta: false }
        ]
      },
      {
        id: '28',
        texto: '¿Como se denomina en una red de ordenadores el elemento que permite conectar varios dispositivos dentro de la misma red permitiendo la comunicación entre ellos?',
        tipo: 'normal',
        opciones: [
          { texto: 'Switch', correcta: true },
          { texto: 'Puente (Bridge)', correcta: false },
          { texto: 'Modem', correcta: false },
          { texto: 'Firewall', correcta: false }
        ]
      },
      {
        id: '29',
        texto: '¿En que nivel del modelo OSI (Open Systems Interconnection) trabaja el protocolo SMTP (Simple Mail Transfer Protocol)?',
        tipo: 'normal',
        opciones: [
          { texto: 'Nivel 2, capa de enlace de datos', correcta: false },
          { texto: 'Nivel 3, capa de red', correcta: false },
          { texto: 'Nivel 5, capa de sesion', correcta: false },
          { texto: 'Nivel 7, capa de aplicacion', correcta: true }
        ]
      },
      {
        id: '30',
        texto: '¿Cuál de los siguientes servicios es proporcionado por la capa de aplicación?',
        tipo: 'normal',
        opciones: [
          { texto: 'ARP', correcta: false },
          { texto: 'FTP', correcta: true },
          { texto: 'ICMP', correcta: false },
          { texto: 'IPv4', correcta: false }
        ]
      },
      {
        id: '31',
        texto: 'Indique que función realiza el kernel de un sistema operativo:',
        tipo: 'normal',
        opciones: [
          { texto: 'Gestion de procesos', correcta: true },
          { texto: 'Control del ancho de banda', correcta: false },
          { texto: 'Gestion de la interfaz grafica', correcta: false },
          { texto: 'Gestion de actualizaciones', correcta: false }
        ]
      },
      {
        id: '32',
        texto: '¿Qué función principal tienen los semáforos en los sistemas operativos?',
        tipo: 'normal',
        opciones: [
          { texto: 'Garantizar la integridad de los datos antes de que se escriban en almacenamiento no volátil', correcta: false },
          { texto: 'Gestionar el enrutamiento de los datos hacia su destino, ya sea almacenamiento local en el dispositivo, red local o Internet', correcta: false },
          { texto: 'Definir la prioridad de los procesos que están en espera de ejecución', correcta: false },
          { texto: 'Gestionar el acceso a los recursos compartidos de manera sincronizada', correcta: true }
        ]
      },
      {
        id: '33',
        texto: '¿Cuál de los siguientes términos no corresponde a una distribución de Linux?',
        tipo: 'normal',
        opciones: [
          { texto: 'Mojave', correcta: true },
          { texto: 'Fedora', correcta: false },
          { texto: 'Ubuntu', correcta: false },
          { texto: 'Debian', correcta: false }
        ]
      },
      {
        id: '34',
        texto: '¿Que herramienta se puede usar en sistemas Windows para comprobar y corregir errores en el sistema de ficheros?',
        tipo: 'normal',
        opciones: [
          { texto: 'chkdsk', correcta: true },
          { texto: 'defrag', correcta: false },
          { texto: 'ren', correcta: false },
          { texto: 'rmdir', correcta: false }
        ]
      },
      {
        id: '35',
        texto: '¿Qué herramienta de cifrado de discos ofrece Windows de manera nativa?',
        tipo: 'normal',
        opciones: [
          { texto: 'BitLocker', correcta: true },
          { texto: 'FileVault', correcta: false },
          { texto: 'DiskSecure', correcta: false },
          { texto: 'TrueCrypt', correcta: false }
        ]
      },
      {
        id: '36',
        texto: '¿Cuál de los siguientes elementos NO se almacena en el directorio SYSVOL de un controlador de dominio Windows?',
        tipo: 'normal',
        opciones: [
          { texto: 'Las plantillas administrativas (ADM)', correcta: false },
          { texto: 'Las bases de datos de usuarios y contraseñas', correcta: true },
          { texto: 'Las políticas de grupo (GPO)', correcta: false },
          { texto: 'Los scripts de inicio de sesión', correcta: false }
        ]
      },
      {
        id: '37',
        texto: '¿Qué servicio en un servidor Linux permite compartir archivos con equipos Windows para que estos puedan acceder a ellos de manera nativa?',
        tipo: 'normal',
        opciones: [
          { texto: 'NFS (Network File System)', correcta: false },
          { texto: 'FTP (File Transfer Protocol)', correcta: false },
          { texto: 'SMB (Server Message Block)', correcta: true },
          { texto: 'SSH (Secure SHell)', correcta: false }
        ]
      },
      {
        id: '38',
        texto: 'Indique que característica presentan los lenguajes orientados a objetos:',
        tipo: 'normal',
        opciones: [
          { texto: 'Herencia', correcta: true },
          { texto: 'Agregación', correcta: false },
          { texto: 'Visualizacion', correcta: false },
          { texto: 'Persistencia', correcta: false }
        ]
      },
      {
        id: '39',
        texto: '¿Cuál es la principal función de un bloque try-catch en programación?',
        tipo: 'normal',
        opciones: [
          { texto: 'Optimizar el rendimiento del código', correcta: false },
          { texto: 'Permitir la ejecución del código sin errores', correcta: false },
          { texto: 'Capturar y manejar errores o excepciones durante la ejecución del programa', correcta: true },
          { texto: 'Ejecutar código asíncrono', correcta: false }
        ]
      },
      {
        id: '40',
        texto: 'En el contexto de la programación orientada a aspectos, ¿qué es un punto de corte (join point)?',
        tipo: 'normal',
        opciones: [
          { texto: 'Un error que detiene la ejecución del programa', correcta: false },
          { texto: 'Una herramienta utilizada en la depuración del código, que permite detener la ejecución en un punto determinado y continuarla paso a paso para inspeccionar el estado del programa', correcta: false },
          { texto: 'Una función que permite el paso de parámetros de manera flexible', correcta: false },
          { texto: 'Una ubicación específica en el código donde se puede insertar un aspecto', correcta: true }
        ]
      },
      {
        id: '41',
        texto: 'En la programación orientada a objetos, el polimorfismo permite:',
        tipo: 'normal',
        opciones: [
          { texto: 'Ocultar información', correcta: false },
          { texto: 'Utilizar métodos con el mismo nombre pero comportamientos diferentes', correcta: true },
          { texto: 'Heredar propiedades de una clase a otra', correcta: false },
          { texto: 'Acceder desde una clase a los métodos privados de otra clase', correcta: false }
        ]
      },
      {
        id: '42',
        texto: '¿Como se denomina el proceso de traducción de un programa en código fuente a un programa que puede ser ejecutado en una computadora?',
        tipo: 'normal',
        opciones: [
          { texto: 'Compilacion', correcta: true },
          { texto: 'Depuracion', correcta: false },
          { texto: 'Ejecución', correcta: false },
          { texto: 'Optimizacion', correcta: false }
        ]
      },
      {
        id: '43',
        texto: '¿Cuál es la salida del siguiente código en Java?\npublic class Main {\n    public static void main(String[] args) {\n        int[] array = {1, 2, 3, 4, 5};\n        int suma = 0;\n        for (int i = 0; i < array.length; i += 2) {\n            suma += array[i];\n        }\n        System.out.println(suma);\n    }\n}',
        tipo: 'normal',
        opciones: [
          { texto: '6', correcta: false },
          { texto: '9', correcta: true },
          { texto: '10', correcta: false },
          { texto: '12', correcta: false }
        ]
      },
      {
        id: '44',
        texto: '¿Cuál es la duración típica de un Sprint en Scrum?',
        tipo: 'normal',
        opciones: [
          { texto: '2 meses', correcta: false },
          { texto: '2-4 semanas', correcta: true },
          { texto: '1 semana', correcta: false },
          { texto: '1 día', correcta: false }
        ]
      },
      {
        id: '45',
        texto: '¿Qué es un pipeline en DevOps?',
        tipo: 'normal',
        opciones: [
          { texto: 'Un flujo automatizado de tareas de desarrollo y despliegue', correcta: true },
          { texto: 'Un flujo de integración continua de cambios de código', correcta: false },
          { texto: 'Un flujo de entrega continua de cambios de código en producción', correcta: false },
          { texto: 'Un flujo de trabajo de pruebas automatizadas', correcta: false }
        ]
      },
      {
        id: '46',
        texto: '¿Cual de las siguientes opciones se corresponde con un modelo de ciclo de vida software?',
        tipo: 'normal',
        opciones: [
          { texto: 'Modelo NIS2', correcta: false },
          { texto: 'Modelo en cascada', correcta: true },
          { texto: 'Modelo Java', correcta: false },
          { texto: 'Modelo ATT&CK', correcta: false }
        ]
      },
      {
        id: '47',
        texto: 'Indique que se entiende por DevSecOps:',
        tipo: 'normal',
        opciones: [
          { texto: 'Es una filosofía que integra practicas de seguridad en el proceso de desarrollo de software y operaciones', correcta: true },
          { texto: 'Es una filosofía para el desarrollo rápido de aplicaciones (RAD)', correcta: false },
          { texto: 'Hace referencia al director de seguridad de la información responsable de implementar medidas de seguridad de la información', correcta: false },
          { texto: 'Hace referencia a los equipos encargados de las pruebas software', correcta: false }
        ]
      },
      {
        id: '48',
        texto: '¿Qué herramienta es ampliamente utilizada para la integración y despliegue continuo (CI/CD)?',
        tipo: 'normal',
        opciones: [
          { texto: 'Oracle Forms', correcta: false },
          { texto: 'Microsoft Word', correcta: false },
          { texto: 'Github Actions', correcta: true },
          { texto: 'Adobe Acrobat', correcta: false }
        ]
      },
      {
        id: '49',
        texto: '¿Qué herramienta es esencial para la visualización y análisis de datos provenientes de diversas fuentes y permite crear dashboards personalizados y alertas?',
        tipo: 'normal',
        opciones: [
          { texto: 'Prometheus', correcta: false },
          { texto: 'Kibana', correcta: false },
          { texto: 'Grafana', correcta: true },
          { texto: 'ELK Stack', correcta: false }
        ]
      },
      {
        id: '50',
        texto: '¿Cuál de las siguientes afirmaciones sobre la seguridad de las bases de datos en la nube es correcta?',
        tipo: 'normal',
        opciones: [
          { texto: 'Las bases de datos en la nube son inmunes a los ataques', correcta: false },
          { texto: 'La seguridad de las bases de datos en la nube es responsabilidad exclusiva del proveedor de servicios en la nube', correcta: false },
          { texto: 'Las bases de datos en la nube son inherentemente más seguras que las bases de datos locales', correcta: false },
          { texto: 'Los usuarios deben implementar medidas de seguridad adicionales para proteger sus datos en la nube', correcta: true }
        ]
      },
      {
        id: '51',
        texto: 'Un sistema de gestión de bases de datos que organiza los datos en tablas que permiten establecer relaciones entre ellas, se denomina:',
        tipo: 'normal',
        opciones: [
          { texto: 'Sistema de Gestion de Bases de Datos NoSQL', correcta: false },
          { texto: 'Sistema de Gestion de Bases de Datos Orientado a Objetos', correcta: false },
          { texto: 'Sistema de Gestion de Bases de Datos Relacionales', correcta: true },
          { texto: 'Sistema de Gestion de Bases de Datos Lineales', correcta: false }
        ]
      },
      {
        id: '52',
        texto: '¿Qué componente de un sistema de gestión de bases de datos se encarga de interactuar con el hardware y gestionar el almacenamiento físico de los datos?',
        tipo: 'normal',
        opciones: [
          { texto: 'Motor de base de datos', correcta: true },
          { texto: 'Interfaz de Usuario', correcta: false },
          { texto: 'Lenguaje de consulta', correcta: false },
          { texto: 'Sistema de gestión de transacciones', correcta: false }
        ]
      },
      {
        id: '53',
        texto: '¿Cuál es la principal característica de un sistema de gestión de bases de datos orientado a objetos?',
        tipo: 'normal',
        opciones: [
          { texto: 'Almacena datos en tablas', correcta: false },
          { texto: 'Permite la herencia y el encapsulamiento', correcta: true },
          { texto: 'Usa un modelo de red para gestionar datos', correcta: false },
          { texto: 'Relaciona datos a través de punteros', correcta: false }
        ]
      },
      {
        id: '54',
        texto: '¿Cuál es el propósito de utilizar un driver JDBC de tipo 4?',
        tipo: 'normal',
        opciones: [
          { texto: 'Proporcionar una capa adicional de seguridad', correcta: false },
          { texto: 'Proporcionar una conexión directa a la base de datos sin utilizar un servidor intermedio', correcta: true },
          { texto: 'Traducir las llamadas JDBC a llamadas ODBC', correcta: false },
          { texto: 'Emular el comportamiento de una base de datos', correcta: false }
        ]
      },
      {
        id: '55',
        texto: 'El proceso mediante al cual se organiza y almacena la información para facilitar su acceso y recuperación se conoce como:',
        tipo: 'normal',
        opciones: [
          { texto: 'Escalabilidad', correcta: false },
          { texto: 'Mapeo de datos', correcta: false },
          { texto: 'Consistencia', correcta: false },
          { texto: 'Indexacion', correcta: true }
        ]
      },
      {
        id: '56',
        texto: '¿Qué es un algoritmo de un motor de búsqueda?',
        tipo: 'normal',
        opciones: [
          { texto: 'Un hardware acelerador que mejora la velocidad de las búsquedas', correcta: false },
          { texto: 'Un conjunto de reglas, acciones y cálculos que determinan el orden en que se presentan los resultados', correcta: true },
          { texto: 'Un tipo de programa que solo realiza búsquedas en las redes sociales y presenta sus resultados', correcta: false },
          { texto: 'Un formato de almacenamiento de datos para Internet', correcta: false }
        ]
      },
      {
        id: '57',
        texto: '¿Cuál de las siguientes situaciones indica una violación de la Segunda Forma Normal (2FN)?',
        tipo: 'normal',
        opciones: [
          { texto: 'Una tabla tiene una clave primaria compuesta', correcta: false },
          { texto: 'Una tabla tiene atributos multivaluados', correcta: false },
          { texto: 'Una tabla tiene atributos que no dependen de la clave primaria completa', correcta: true },
          { texto: 'Una tabla tiene una clave externa que hace referencia a otra tabla', correcta: false }
        ]
      },
      {
        id: '58',
        texto: '¿Cuál de las siguientes instrucciones SQL se utiliza para seleccionar datos de una base de datos?',
        tipo: 'normal',
        opciones: [
          { texto: 'INSERT', correcta: false },
          { texto: 'SELECT', correcta: true },
          { texto: 'UPDATE', correcta: false },
          { texto: 'DELETE', correcta: false }
        ]
      },
      {
        id: '59',
        texto: 'En el contexto del Open Document Format (ODF) indique la respuesta correcta:',
        tipo: 'normal',
        opciones: [
          { texto: 'Es un estandar en el ambito de la ciberseguridad', correcta: false },
          { texto: 'Es un estandar para documentos de oficina que facilita la interoperabilidad', correcta: true },
          { texto: 'Es un formato de archivos propietario diseñado por Microsoft', correcta: false },
          { texto: 'Es el único formato por defecto para archivos utilizado por Windows 11', correcta: false }
        ]
      },
      {
        id: '60',
        texto: 'Entre las funciones que debe tener una herramienta ITSM se encuentran:',
        tipo: 'normal',
        opciones: [
          { texto: 'Informes y analiticas, Gestion de despliegue software, Gestion de antivirus', correcta: false },
          { texto: 'Automatizacion de procesos, Informes y analiticas, Gestion y control de accesos', correcta: false },
          { texto: 'Gestion de solicitudes, Gestion de incidencias, Base de conocimiento', correcta: true },
          { texto: 'Gestion de incidencias, Repositorio software, Entorno de programacion', correcta: false }
        ]
      },
      {
        id: '61',
        texto: 'Entre las funciones que debe tener una herramienta de gestion de activos se encuentran:',
        tipo: 'normal',
        opciones: [
          { texto: 'Seguimiento del ciclo de vida y Gestion de licencias', correcta: true },
          { texto: 'Inventario de activos y Editor de textos', correcta: false },
          { texto: 'Gestion de licencias y Entorno de codificacion', correcta: false },
          { texto: 'Inventario de activos y Gestion de incidentes de ciberseguridad', correcta: false }
        ]
      },
      {
        id: '62',
        texto: '¿Qué puerto TCP/IP utiliza por defecto VNC para establecer una conexión?',
        tipo: 'normal',
        opciones: [
          { texto: '23', correcta: false },
          { texto: '8080', correcta: false },
          { texto: '5900', correcta: true },
          { texto: '443', correcta: false }
        ]
      },
      {
        id: '63',
        texto: '¿Qué norma internacional guía las buenas prácticas de ITSM?',
        tipo: 'normal',
        opciones: [
          { texto: 'ISO 9001', correcta: false },
          { texto: 'ISO 14001', correcta: false },
          { texto: 'ISO 20000', correcta: true },
          { texto: 'ISO 27001', correcta: false }
        ]
      },
      {
        id: '64',
        texto: '¿Que es un hipervisor?',
        tipo: 'normal',
        opciones: [
          { texto: 'Un dispositivo de almacenamiento avanzado', correcta: false },
          { texto: 'Un sistema de gestion de bases de datos relacionales', correcta: false },
          { texto: 'Un software que crea y gestiona maquinas virtuales', correcta: true },
          { texto: 'Un bus de intercomunicaciones de redes', correcta: false }
        ]
      },
      {
        id: '65',
        texto: 'Indique la opcion correcta sobre el concepto de cloud computing:',
        tipo: 'normal',
        opciones: [
          { texto: 'Hace referencia a la compra de equipos informáticos de forma centralizada', correcta: false },
          { texto: 'Hace referencia a la entrega de servicios informáticos a través de Internet', correcta: true },
          { texto: 'Hace referencia al almacenamiento de datos en discos duros físicos o virtuales', correcta: false },
          { texto: 'Hace referencia al cifrado extremo a extremo en las comunicaciones', correcta: false }
        ]
      },
      {
        id: '66',
        texto: '¿Qué es "Platform as a Service" (PaaS)?',
        tipo: 'normal',
        opciones: [
          { texto: 'Un modelo en la nube donde se entrega software como servicio', correcta: false },
          { texto: 'Un modelo en la nube que ofrece hardware dedicado con grandes capacidades de computo empresarial', correcta: false },
          { texto: 'Un modelo en la nube que proporciona un entorno donde desarrollar, gestionar y ejecutar aplicaciones', correcta: true },
          { texto: 'Un modelo en la nube que solo ofrece almacenamiento de datos bajo demanda', correcta: false }
        ]
      },
      {
        id: '67',
        texto: '¿Qué tipo de copia de seguridad incluye todos los datos seleccionados, independientemente de si han cambiado desde la última copia de seguridad?',
        tipo: 'normal',
        opciones: [
          { texto: 'Copia de seguridad incremental', correcta: false },
          { texto: 'Copia de seguridad diferencial', correcta: false },
          { texto: 'Copia de seguridad completa', correcta: true },
          { texto: 'Copia de seguridad parcial', correcta: false }
        ]
      },
      {
        id: '68',
        texto: '¿Qué es una estrategia de copia de seguridad en espejo?',
        tipo: 'normal',
        opciones: [
          { texto: 'Una copia de todos los datos creados una vez', correcta: false },
          { texto: 'Una copia exacta de todos los datos en tiempo real', correcta: true },
          { texto: 'Una copia que se realiza mensualmente', correcta: false },
          { texto: 'Una copia de seguridad que se realiza en un disco externo, normalmente en una memoria USB', correcta: false }
        ]
      },
      {
        id: '69',
        texto: 'El algoritmo conocido como Spanning Tree Algorithm se usa para:',
        tipo: 'normal',
        opciones: [
          { texto: 'Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos', correcta: true },
          { texto: 'Optimizar los caminos usados en redes complejas con routers', correcta: false },
          { texto: 'Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla', correcta: false },
          { texto: 'Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estación no conteste (puede estar apagada o estropeada)', correcta: false }
        ]
      },
      {
        id: '70',
        texto: '¿Qué es una VPN?',
        tipo: 'normal',
        opciones: [
          { texto: 'Una red pública virtual, de acceso gratuito, que se encuentra habitualmente en hoteles y establecimientos públicos', correcta: false },
          { texto: 'Una red de procesamiento de video que permite hacer cluster de dispositivos', correcta: false },
          { texto: 'Una tarjeta de red externa que se conecta al PC por USB', correcta: false },
          { texto: 'Un método para establecer una conexión segura y cifrada a través de Internet', correcta: true }
        ]
      },
      {
        id: '71',
        texto: '¿Qué institución emite certificados digitales en España?',
        tipo: 'normal',
        opciones: [
          { texto: 'Agencia Tributaria', correcta: false },
          { texto: 'Fábrica Nacional de Moneda y Timbre (FNMT)', correcta: true },
          { texto: 'Ministerio de Educación', correcta: false },
          { texto: 'Los ayuntamientos de las capitales de provincia', correcta: false }
        ]
      },
      {
        id: '72',
        texto: 'De los estándares del IEEE siguientes, ¿Cuál se corresponde con la tecnología WLAN?',
        tipo: 'normal',
        opciones: [
          { texto: '802.11', correcta: true },
          { texto: '802.5', correcta: false },
          { texto: '802.8', correcta: false },
          { texto: '802.3', correcta: false }
        ]
      },
      {
        id: '73',
        texto: '¿Qué protocolo se utiliza para resolver direcciones IP a direcciones MAC?',
        tipo: 'normal',
        opciones: [
          { texto: 'ARP', correcta: true },
          { texto: 'DNS', correcta: false },
          { texto: 'DHCP', correcta: false },
          { texto: 'ICMP', correcta: false }
        ]
      },
      {
        id: '74',
        texto: '¿Qué significa XML?',
        tipo: 'normal',
        opciones: [
          { texto: 'External Markup Language', correcta: false },
          { texto: 'Extensible Markup Language', correcta: true },
          { texto: 'Extra Markup Language', correcta: false },
          { texto: 'Extended Markup Language', correcta: false }
        ]
      },
      {
        id: '75',
        texto: '¿Qué protocolo se utiliza para la gestión de dispositivos de red?',
        tipo: 'normal',
        opciones: [
          { texto: 'HTTP', correcta: false },
          { texto: 'SNMP', correcta: true },
          { texto: 'SMTP', correcta: false },
          { texto: 'FTP', correcta: false }
        ]
      },
      {
        id: '76',
        texto: '¿Qué tipo de ciberamenaza aprovecha el uso de contraseñas cortas y sencillas?',
        tipo: 'normal',
        opciones: [
          { texto: 'Denegación de Servicio (DoS)', correcta: false },
          { texto: 'Phishing', correcta: false },
          { texto: 'Man-in-the-Middle (MitM)', correcta: false },
          { texto: 'Ataque de fuerza bruta', correcta: true }
        ]
      },
      {
        id: '77',
        texto: '¿Cuál es la principal legislación española que protege los programas de ordenador?',
        tipo: 'normal',
        opciones: [
          { texto: 'Ley Orgánica de Protección de Datos', correcta: false },
          { texto: 'Ley de Propiedad Intelectual', correcta: true },
          { texto: 'Ley General de Telecomunicaciones', correcta: false },
          { texto: 'Ley de Servicios de la Sociedad de la Información', correcta: false }
        ]
      },
      {
        id: '78',
        texto: '¿Cuál es el propósito del protocolo DHCP en una red?',
        tipo: 'normal',
        opciones: [
          { texto: 'Traducir nombres de dominio a direcciones IP', correcta: false },
          { texto: 'Asignar dinámicamente direcciones IP a los dispositivos', correcta: true },
          { texto: 'Transferir archivos entre servidores y clientes', correcta: false },
          { texto: 'Monitorear el estado de la red', correcta: false }
        ]
      },
      {
        id: '79',
        texto: '¿Cuál de los siguientes es un ejemplo de un motor de persistencia en Java?',
        tipo: 'normal',
        opciones: [
          { texto: 'Hibernate', correcta: true },
          { texto: 'Spring Framework', correcta: false },
          { texto: 'Apache Tomcat', correcta: false },
          { texto: 'XQuery', correcta: false }
        ]
      },
      {
        id: 'SP1',
        texto: 'Le piden a un técnico que instale un hub USB en el PC de un usuario ¿Cuál es la función de este dispositivo?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Permitir la conexión de dispositivos inalámbricos', correcta: false },
          { texto: 'Aumentar la velocidad de transferencia de datos', correcta: false },
          { texto: 'Ampliar el número de dispositivos USB que se pueden conectar al PC', correcta: true },
          { texto: 'Proteger a los dispositivos conectados frente a sobretensiones', correcta: false }
        ]
      },
      {
        id: 'SP2',
        texto: 'Este usuario le comenta que necesita mayor potencia gráfica y varios monitores. Su PC cuenta con tarjeta gráfica integrada y la opción "iGPU Multi-Monitor" habilitada en la BIOS. ¿Qué ocurre si se conecta una segunda tarjeta gráfica dedicada en la placa base?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'El PC no arranca porque se produce un conflicto entre las dos tarjetas gráficas', correcta: false },
          { texto: 'El PC funciona con la tarjeta gráfica dedicada, ya que al conectarla se inhabilita automáticamente la tarjeta gráfica integrada', correcta: false },
          { texto: 'Ambas tarjetas gráficas funcionan de forma independiente, pudiendo conectar monitores a ambas', correcta: true },
          { texto: 'Ambas tarjetas gráficas funcionan de forma conjunta. Solo se pueden conectar monitores a la tarjeta dedicada, pero se obtiene el rendimiento gráfico conjunto de las dos tarjetas', correcta: false }
        ]
      },
      {
        id: 'SP3',
        texto: 'Al abrir la caja del PC se da cuenta de que su fuente de alimentación es modular. ¿Cuál es la característica principal de una fuente de alimentación modular?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Permite desconectar los cables que no se necesiten, lo que facilita la organización y mejora la circulación dentro del PC', correcta: true },
          { texto: 'Si se requiere mayor potencia, es posible aumentar su capacidad añadiendo módulos adicionales', correcta: false },
          { texto: 'Permiten intercambiar los conectores de los cables para cambiar su función según el componente al que se conecten', correcta: false },
          { texto: 'Permiten controlar de forma independiente la energía de cada componente del PC', correcta: false }
        ]
      },
      {
        id: 'SP4',
        texto: 'En su sede se están migrando los PCs a Windows 11. Le piden que instale y configure una tanda de PCs utilizando la herramienta de preparación de imágenes Sysprep. ¿Cuál de las siguientes afirmaciones sobre esta herramienta es falsa?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Permite eliminar configuraciones específicas del equipo, como el SID (Security Identifier), para evitar problemas de identidad al clonar equipos', correcta: false },
          { texto: 'Es una herramienta exclusiva de los sistemas Windows', correcta: false },
          { texto: 'Puede configurarse para que, en el primer inicio del sistema, muestre la experiencia de configuración inicial de Windows (configuración de idioma, red, cuentas, etc)', correcta: false },
          { texto: 'Permite crear el archivo de imagen directamente con Sysprep, sin necesidad de utilizar ninguna herramienta adicional', correcta: true }
        ]
      },
      {
        id: 'SP5',
        texto: 'Durante la instalación de uno de los nuevos PCs, el usuario le comenta que ha descubierto un atajo de teclado de gran utilidad en Windows. ¿Qué función realiza el atajo de teclado Windows + L?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Abre la lista de aplicaciones disponibles, ordenadas por frecuencia de uso', correcta: false },
          { texto: 'Bloquea el equipo', correcta: true },
          { texto: 'Activa el plan de energía de bajo consumo', correcta: false },
          { texto: 'Activa la lupa (función de aumento de pantalla)', correcta: false }
        ]
      },
      {
        id: 'SP6',
        texto: 'En este PC, debe instalar una memoria RAM del tipo DDR. ¿Qué significa DDR en el contexto de la memoria RAM?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Dynamic Digital Register (Registro Dinámico Digital)', correcta: false },
          { texto: 'Double Data Rate (Tasa de Doble Transferencia de Datos)', correcta: true },
          { texto: 'Data Delivery Rate (Tasa de Entrega de Datos)', correcta: false },
          { texto: 'Data-Driven Reliability (Fiabilidad Impulsada por Datos)', correcta: false }
        ]
      },
      {
        id: 'SP7',
        texto: 'El servicio de acceso VPN de la Junta de Andalucía permite a un usuario individual conectarse a la Red Corporativa de la Junta de Andalucía, desde cualquier sitio con acceso a Internet, de una manera segura, que necesita:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Que los datos se transmiten cifrados a través de un túnel TSL', correcta: false },
          { texto: 'Sólo podrán conectarse los usuarios autorizados', correcta: false },
          { texto: 'Habrá una trazabilidad que permitirá seguir la actividad de los usuarios', correcta: false },
          { texto: 'Todas son correctas', correcta: true }
        ]
      },
      {
        id: 'SP8',
        texto: 'La Junta de Andalucía ha apostado por la automatización inteligente, que combina diferentes tecnologías. ¿Podrías indicar cuales de ellas son utilizadas?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'RPA (Robotic Process Automation), que es un software que permite emular cualquier actividad que desarrolle un humano de carácter mecánico', correcta: false },
          { texto: 'IDP (Inteligent Document Process), que es un software de reconocimiento de texto que permite convertir diferentes documentos en datos editables a partir de una imagen de texto', correcta: false },
          { texto: 'Ni A ni B son correctas', correcta: false },
          { texto: 'A y B son correctas', correcta: true }
        ]
      },
      {
        id: 'SP9',
        texto: '(SUPUESTO A) Un funcionario tiene que presentar una solicitud de permiso a su departamento de personal, previo visto bueno de su coordinador y firma de su superior jerárquico que será el que lo autorice. La solicitud deberá realizarla vía telemática. La Junta de Andalucía dispone de herramientas para todo el trámite telemático indicado. Para presentar la documentación, la herramienta es:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'GIRO', correcta: false },
          { texto: 'SUR', correcta: false },
          { texto: 'PORTAFIRMAS', correcta: false },
          { texto: 'BANDEJA', correcta: true }
        ]
      },
      {
        id: 'SP10',
        texto: '(SUPUESTO A) El documento deberá contener el visto bueno de su coordinador, que deberá darlo de forma telemática en el proceso. Para ello utilizará la herramienta:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Ireunion', correcta: false },
          { texto: 'ARIES', correcta: false },
          { texto: 'PORTAFIRMAS', correcta: true },
          { texto: 'GIRO', correcta: false }
        ]
      },
      {
        id: 'SP11',
        texto: '(SUPUESTO A) El documento debe ser firmado por su superior jerárquico. ¿Qué herramienta podrá utilizar, interconectada con la herramienta de tramitación de la solicitud?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'PORTAFIRMAS', correcta: true },
          { texto: 'BANDEJA', correcta: false },
          { texto: 'ARIES', correcta: false },
          { texto: 'SUR', correcta: false }
        ]
      },
      {
        id: 'SP12',
        texto: '(SUPUESTO A) Paralelamente y una vez que ha finalizado el proceso, el funcionario descarga el documento firmado digitalmente por su superior para enviarlo a su coordinador, el cual desea verificar la autenticidad del documento. Para que se pueda verificar la autenticidad de éste, en el documento debe aparecer:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'El nombre, apellidos y dni de la persona firmante', correcta: false },
          { texto: 'La dirección de email donde solicitar el documento firmado', correcta: false },
          { texto: 'No es posible realizar la verificación', correcta: false },
          { texto: 'La dirección web donde poder realizar la verificación, junto al código de verificación de dicho documento', correcta: true }
        ]
      },
      {
        id: 'SP13',
        texto: '(SUPUESTO A) Una vez que dicho proceso ha finalizado, el departamento de personal, deberá grabar dicho permiso en al aplicativo que gestiona los recursos humanos de la Junta de Andalucía. ¿A que sistema de información nos estamos refiriendo?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'SIRhUS', correcta: true },
          { texto: 'SUR', correcta: false },
          { texto: 'SIRHJA', correcta: false },
          { texto: 'Ninguna es correcta', correcta: false }
        ]
      },
      {
        id: 'SP14',
        texto: '(Supuesto B) En el sistema de incidencias de la Consejería, se recibe una petición donde se indica la incorporación de un nuevo funcionario en una sede administrativa remota, dependiente de esta Consejería, con la que tiene visibilidad de red. En dicha oficina no hay personal TIC, pero hay personal de mantenimiento que se ofrece a colaborar con usted para realizar cuantas verificaciones necesite y no puedan ser realizadas de forma remota. El técnico pide a su colaborador que encienda el portátil que hay disponible en el puesto de trabajo que va a ocupar dicho funcionario y le indique el código de inventario (pegatina identificativa) existente en la base del mismo para identificar el dispositivo. Su colaborador le indica que aparece la pantalla de inicio de Windows pero usted no tiene conectividad con el equipo en cuestión. ¿Que comprobación puede indicar a su colaborador?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Le pide que compruebe si el portátil tiene disponible un Docking Station', correcta: false },
          { texto: 'Le pide que ajuste la conexión del cable de red entre el portátil y el punto de red', correcta: true },
          { texto: 'Le pide que inicie sesión con unas claves administrativas que le facilitara', correcta: false },
          { texto: 'Concluye que el portátil esta defectuoso y procede abrir incidencia al servicio técnico', correcta: false }
        ]
      },
      {
        id: 'SP15',
        texto: '(Supuesto B) Decide volver a comprobar conectividad con el portátil. Indique que opción puede utilizar para dicha comprobación sabiendo que no existe un firewall configurado:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'utilizar el comando perfmon junto con la dirección IP del portátil', correcta: false },
          { texto: 'Indica a su colaborador que acceda como Administrador al equipo e intente acceder a www.google.es con un navegador', correcta: false },
          { texto: 'utilizar el comando tracert junto con la dirección IP del portátil pues tiene posibilidad de conocerla en sus sistemas de inventario', correcta: true },
          { texto: 'ejecuta ipconfig junto con la dirección IP del portátil', correcta: false }
        ]
      },
      {
        id: 'SP16',
        texto: '(Supuesto B) Comprueba que el equipo responde y por tanto se dispone a configurarlo. ¿Que herramienta podría utilizar para conectarse al equipo remoto y abrir una sesión?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Un cliente VNC', correcta: true },
          { texto: 'Un cliente LDAP', correcta: false },
          { texto: 'Un cliente SMTP', correcta: false },
          { texto: 'Un cliente VLAN', correcta: false }
        ]
      },
      {
        id: 'SP17',
        texto: '(Supuesto B) Al conectarse al equipo comprueba que el sistema operativo se encuentra desactualizado. ¿Que tecnología de gestión centralizada de parches para sistemas operativos de Microsoft podría utilizar su organización?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Servicios de Enrutamiento y Acceso Remoto (RRAS)', correcta: false },
          { texto: 'Windows Server Update Services (WSUS)', correcta: true },
          { texto: 'Active Directory Domain Services (AD DS)', correcta: false },
          { texto: 'Active Directory Administrative Center (ADAC)', correcta: false }
        ]
      },
      {
        id: 'SP18',
        texto: '(Supuesto B) La política de asignación de direcciones IP de su Organización establece que los dispositivos siempre deben tener la misma IP de su rango de red. Indique la respuesta correcta:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'No seria posible asignar la misma dirección IP al dispositivo', correcta: false },
          { texto: 'Se debería hacer una reserva en su servidor correspondiente', correcta: true },
          { texto: 'Se deberia añadir una segunda tarjeta de red con dicha dirección IP', correcta: false },
          { texto: 'Se deberia añadir una línea adicional con dicha dirección en el archivo host', correcta: false }
        ]
      },
      {
        id: 'SP19',
        texto: '(Supuesto B) El equipo portátil forma parte de un dominio Active Directory. ¿Con que comando podría comprobar que resuelve correctamente el nombre de su Controlador de Dominio?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'ipconfig', correcta: false },
          { texto: 'net use', correcta: false },
          { texto: 'pathping', correcta: false },
          { texto: 'nslookup', correcta: true }
        ]
      },
      {
        id: 'SP20',
        texto: '(Supuesto B) Para asegurarse que el equipo queda adecuadamente configurado, decide comprobar las políticas de configuración (GPO) que han sido aplicadas al equipo/usuario. Indique que comando podría utilizar para obtener esta información:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'gpresult /R', correcta: true },
          { texto: 'gpupdate /R', correcta: false },
          { texto: 'ipconfig /R', correcta: false },
          { texto: 'tracert /R', correcta: false }
        ]
      },
      {
        id: 'SP21',
        texto: '(SUPUESTO C) Trabajas en el departamento de informática de una conserjería de la Junta de Andalucía, se le asigna la función de configurar/gestionar los puestos de usuario y gestionar varios servicios del servidor, así como implementar la solución más favorable en el ámbito de red de la delegación de una de las provincias. Los equipos de los usuarios tienen Windows 11 y en el departamento de informática la distribución de Linux Ubuntu en su última versión. El servidor de la delegación actualmente tiene instalado Windows Server 2019. La delegación cuenta con seis departamentos; Nominas, administración, personal, informática, registro y secretariado. El direccionamiento de red actual de dicha delegación es 10.165.0.0 /24. La delegación dispone de wifi, emitiendo dos SSID claramente diferenciadas, su nombre son Andalucia_wifi y RCJA, siendo la primera de uso público y la segunda para uso corporativo. Los usuarios de la sede tienen la posibilidad de teletrabajar conectándose por VPN coporporativa y securizada con CheckPoint RCJA v5 como cliente. Los puntos de acceso WIFI usan tecnología Power Over Ethernet + (PoE+). De los siguientes IEEE, indique cuál de ellos hace referencia a dicha tecnología:',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: '802.3af', correcta: false },
          { texto: '802.1ac', correcta: false },
          { texto: '802.11g', correcta: false },
          { texto: '802.3at', correcta: true }
        ]
      },
      {
        id: 'SP22',
        texto: '(SUPUESTO C) ¿Qué solución del CCN-CERT hay que implementar para proporcionar protección contra código dañino de tipo ransomware a los equipos del organismo?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'LUCÍA', correcta: false },
          { texto: 'MICROCLAUDIA', correcta: true },
          { texto: 'ELENA', correcta: false },
          { texto: 'MARTA', correcta: false }
        ]
      },
      {
        id: 'SP23',
        texto: '(SUPUESTO C) Hemos detectado un problema en el funcionamiento de varios equipos. ¿Qué tipo de mantenimiento se le realizada a los equipos cuando se detecta un problema de funcionamiento del sistema informático?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'Perfectivo', correcta: false },
          { texto: 'Adaptativo', correcta: false },
          { texto: 'Correctivo', correcta: true },
          { texto: 'Preventivo', correcta: false }
        ]
      },
      {
        id: 'SP24',
        texto: '(SUPUESTO C) Te piden asesoramiento sobre un método útil para realizar backups de forma eficiente y garantizar que siempre esté disponible una copia de seguridad cuando se necesite. Se recomienda la estrategia del método 3-2-1, ¿Qué significa la regla del 3-2-1?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: '3 copias de datos, 2 sitios diferentes y 1 backup completo', correcta: false },
          { texto: '3 copias de datos, 2 soportes distintos y 1 copia fuera de la sede', correcta: true },
          { texto: '3 copias completas, 2 dias a la semana y 1 copia incremental', correcta: false },
          { texto: '3 copias completas, 2 incrementales y 1 diferencial', correcta: false }
        ]
      },
      {
        id: 'SP25',
        texto: '(SUPUESTO C) Se necesita comprobar los certificados instalados en el equipo local de un usuario. ¿Cuál de los siguientes comandos, desde en la ventana "Ejecutar", le ofrecerá esta información?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'certmgrs.msc', correcta: false },
          { texto: 'certmac.msc', correcta: false },
          { texto: 'certlocal.msc', correcta: false },
          { texto: 'certlm.msc', correcta: true }
        ]
      },
      {
        id: 'SP26',
        texto: '(SUPUESTO C) Los ordenadores portátiles de los usuarios están encriptados sus discos duros con Bitlocker para una mayor seguridad en caso de perdida o robo, ¿Qué chip es necesario que tengan integrado los ordenadores para activar BitLocker?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'TPM', correcta: true },
          { texto: 'NFC', correcta: false },
          { texto: 'HSM', correcta: false },
          { texto: 'EEPROM', correcta: false }
        ]
      },
      {
        id: 'SP27',
        texto: '(SUPUESTO C) Los equipos portátiles tienen USB PD 3.1 y se quiere alimentar varios dispositivos mediante USB tipo C ¿Hasta qué potencia se puede conseguir con este estándar?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: '60w', correcta: false },
          { texto: '80w', correcta: false },
          { texto: '120w', correcta: false },
          { texto: '240w', correcta: true }
        ]
      },
      {
        id: 'SP28',
        texto: '(SUPUESTO C) Para mantener los datos seguros en la conexión por VPN el cliente usa IPsec, ¿qué protocolos admite Ipsec?',
        tipo: 'supuestoPractico',
        opciones: [
          { texto: 'AH y ESP', correcta: true },
          { texto: 'L2TP y PPTP', correcta: false },
          { texto: 'TLS y DTLS', correcta: false },
          { texto: 'SSTP y OpenVPN', correcta: false }
        ]
      }
    ]
  }
];

// Esta función permitirá guardar el estado del test en localStorage
export const saveTestState = (testId: string, questions: any[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`test_${testId}`, JSON.stringify(questions));
  }
};

// Esta función permitirá recuperar el estado del test de localStorage
export const getTestState = (testId: string) => {
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem(`test_${testId}`);
    if (savedState) {
      return JSON.parse(savedState);
    }
  }
  return null;
}; 