document.getElementById('imcForm').addEventListener('submit', function (event) {
  event.preventDefault()

  let weight = document.getElementById('peso').value
  let height = document.getElementById('altura').value
  let historial = document.getElementById('historial')

  // Validar que los valores ingresados sean números válidos
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById('result').textContent =
      'Por favor ingresa valores válidos para el peso y la altura.'
    return // Detener la ejecución si los datos son inválidos
  }

  let imc = weight / (height * height)

  let result = document.getElementById('result')
  result.textContent = 'Tu IMC es ' + imc.toFixed(2)

  if (imc < 18.5) {
    result.textContent += ' (Bajo peso)'
  } else if (imc < 24.9) {
    result.textContent += ' (Peso normal)'
  } else if (imc < 29.9) {
    result.textContent += ' (Sobrepeso)'
  } else {
    result.textContent += ' (Obesidad)'
  }

  // Agregar botón para guardar los resultados
  let saveButton = document.createElement('button')
  saveButton.textContent = 'Guardar resultado'

  saveButton.addEventListener('click', function () {
    // Lógica para guardar los resultados
    let savedResult = 'Tu IMC es ' + imc.toFixed(2)
    // Aquí puedes implementar la lógica para guardar el resultado en una base de datos, archivo, o cualquier otro medio de almacenamiento
    console.log('Resultado guardado:', savedResult)
  })

  historial.innerHTML += '<p>' + result.textContent + '</p>'

  document.getElementById('result').appendChild(saveButton)
})
