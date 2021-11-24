function verCidades()
{
    fetch("http://localhost:5000/city")
    .then(response => response.json())
    .then(data => escreveCidade(data))
    .catch((err)=>{
        alert('Falha no sistema')
    })
}

function escreveCidade(data)
{
    for(let i=0;i<10;i++)
        {
            let city = data[i].Name
            let row =`<p>${city} </p>`
            document.getElementById('cidades').innerHTML += row
        }
}