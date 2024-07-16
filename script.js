document.getElementById('fortalezas').innerHTML = `
    <p>Durante mi servicio comunitario en la fundación desempeñándome como acompañante académico en materias como física, química y matemáticas descubrí tres fortalezas individuales que resultaron fundamentales para el éxito de las actividades: paciencia, comunicación efectiva y empatía. Ya que la paciencia fue esencial para explicar conceptos complejos de múltiples maneras hasta asegurarme de que los miembros de la fundación los comprendieran plenamente. Cabe mencionar que esta capacidad me permitió manejar las diversas velocidades de aprendizaje sin frustrarme y a su vez mantener un ambiente de enseñanza positivo al igual que alentador.</p>
    <p>Además, mi habilidad para comunicarme de manera clara y efectiva facilitó la transmisión de conocimientos. Usé ejemplos prácticos como el simbolismo de las matemáticas y analogías que resonaron con los estudiantes al enseñar física con conceptos de fútbol, lo que hizo que los conceptos difíciles fueran más accesibles. Esta destreza en la comunicación combinada con mi empatía me permitió entender mejor las dificultades y preocupaciones de los beneficiarios; por ende, se creó un ambiente de apoyo y comprensión.</p>
    <p>La empatía fomentó una relación de confianza motivando a los beneficiarios a participar activamente y a no temer hacer preguntas.</p>
`;

document.getElementById('aportes').innerHTML = `
    <p>Durante mi servicio comunitario en la fundación, tuve la oportunidad de colaborar en diversas actividades que no solo beneficiaron a los miembros de la organización sino que también me permitieron aplicar y desarrollar mis propias habilidades. Dos actividades en particular destacaron por su impacto y la colaboración que implicaron: dar clases extras de matemáticas, física y química, y participar en actividades deportivas los días viernes.</p>
    <p>En primer lugar, las clases extras de matemáticas se centraron en temas clave como sistemas de ecuaciones, ecuaciones cuadráticas, trigonometría y factoreo. Estas sesiones estaban diseñadas para complementar el aprendizaje formal de los miembros de la fundación, proporcionando un espacio adicional para resolver dudas y reforzar conceptos. Empezando con sistemas de ecuaciones, utilicé diversos métodos de resolución como el método de sustitución y el de eliminación para demostrar diferentes enfoques y a su vez encontrar soluciones.</p>
`;

document.getElementById('objetivo').innerHTML = `
    <p>Como ciudadano socialmente responsable y estudiante de sexto semestre de Ingeniería en Biotecnología, mi objetivo de vida a futuro es contribuir al Objetivo de Desarrollo Sostenible (ODS) número 6: "Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos". En particular, me propongo desarrollar tecnologías innovadoras para la purificación y desalinización de agua ya que así se puede asegurar que las comunidades con escasez de este recurso vital puedan acceder a agua potable de manera sostenible y asequible.</p>
    <p>Para alcanzar este objetivo, implementaré un diseño inverso empezando por definir el resultado deseado, el cual es la creación de un prototipo funcional de un sistema de purificación y desalinización de agua que pueda ser escalado al igual que adaptado a diferentes entornos. Evaluaré el éxito de este objetivo mediante la eficacia del sistema en términos de costo, eficiencia energética y capacidad de producción de agua potable.</p>
`;

document.getElementById('reflexion').innerHTML = `
    <p>La experiencia de trabajo comunitario realizada influyó significativamente en mis propósitos de vida reafirmando mi compromiso con el servicio a la comunidad y la sostenibilidad. A través de la enseñanza de matemáticas y ciencias a estudiantes en una fundación, comprendí la importancia de utilizar mis conocimientos para mejorar la calidad de vida de otros. Esto me llevó a decidir enfocar mi carrera en el desarrollo de tecnologías sostenibles como la purificación de agua, alineándome con los Objetivos de Desarrollo Sostenible. Por lo tanto, el trabajo comunitario no solo enriqueció mi perspectiva sobre el impacto social de mi profesión, sino que también consolidó mi determinación de contribuir a soluciones que beneficien a la sociedad en general.</p>
`;

document.getElementById('guion').innerHTML = `
    <p>"Hola a todos. Hoy quiero contarles un cuento sobre cómo una experiencia de servicio comunitario cambió mi vida y me preparó para el futuro. Acompáñenme en este viaje de descubrimiento y aprendizaje. Había una vez un estudiante universitario que decidió ofrecer su tiempo y conocimientos en una fundación. Enseñando matemáticas y ciencias descubrió que su propósito de vida iba más allá de los libros y exámenes. Se dio cuenta de que con paciencia y empatía podía transformar la vida de los jóvenes inspirándolos a superar sus desafíos académicos.</p>
    <p>Recuerdo claramente mi primer día en la fundación. Estaba nervioso pero también emocionado por la oportunidad de hacer una diferencia. Los estudiantes, al principio tímidos, pronto se abrieron y mostraron una gran curiosidad y deseo de aprender. Este entusiasmo me motivó a esforzarme cada día más. Pero ¿cómo influyó esto en mis propósitos de vida? Este trabajo me enseñó el valor de la perseverancia y la importancia de contribuir al bienestar de la comunidad. Decidí enfocar mi carrera en la biotecnología para desarrollar soluciones sostenibles como tecnologías para la purificación de agua, alineándome con los Objetivos de Desarrollo Sostenible. Quería que mi trabajo tuviera un impacto positivo y tangible en la sociedad."</p>
`;

// JavaScript para manejar el despliegue de contenido
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement.style.display === 'none' || targetElement.style.display === '') {
            targetElement.style.display = 'block';
        } else {
            targetElement.style.display = 'none';
        }
    });
});
