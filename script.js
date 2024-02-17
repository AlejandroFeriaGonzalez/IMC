document.getElementById('imcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let historial = document.getElementById('historial');

  // Validar que los valores ingresados sean números válidos
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById('result').textContent = 'Por favor ingresa valores válidos para el peso y la altura.';
    return; // Detener la ejecución si los datos son inválidos
  }

  let imc = weight / (height * height);

  document.getElementById('result').textContent = 'Tu IMC es ' + imc.toFixed(2);

  // Agregar botón para guardar los resultados
  let saveButton = document.createElement('button');
  saveButton.textContent = 'Guardar resultado';
  saveButton.addEventListener('click', function() {
    // Lógica para guardar los resultados
    let savedResult = 'Tu IMC es ' + imc.toFixed(2);
    // Aquí puedes implementar la lógica para guardar el resultado en una base de datos, archivo, o cualquier otro medio de almacenamiento
    console.log('Resultado guardado:', savedResult);
  });

  historial.innerHTML += '<p>' + 'Tu IMC es ' + imc.toFixed(2) + '</p>';

  document.getElementById('result').appendChild(saveButton);
});
