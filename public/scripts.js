function verCidades()
{
    fetch("http://localhost:4000/city")
    .then(response => response.json())
    .then(data => escreveCidade(data))
    .catch((err)=>{
        alert('Falha no sistema')
    })
}

function escreveCidade(data)
{
    fetch("http://localhost:4000/city")
    for(let i=0;i<data.length;i++)
        {
            let city = data[i].Name
            let row =`<p>${city} </p>`
            document.getElementById('cidades').innerHTML += row
        }
}