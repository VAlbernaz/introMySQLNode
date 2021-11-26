function verCidades()
{
    fetch("http://localhost:3000/city")
    .then(response => response.json())
    .then(data => preencheTabela(data))
    .catch((err)=>{
        alert('Falha no sistema')
    })
}

function preencheTabela(data)
{
    document.getElementById('tabela').innerHTML = ""
    for(let i=0;i<10;i++)
        {
            let city = data[i].Name
            let district = data[i].District
            let populacao = data[i].Population
            let row =` <tr>
            <td>${city}</td>
            <td>${district}</td>
            <td>${populacao}</td>
            </tr>`
            document.getElementById('tabela').innerHTML += row
        }
}