const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Inserir dados na tabela ||| images ou images? Linha 11...
    await saveOrphanage(db, {
        lat : "-27.222633" ,
        lng : "-49.6555874" ,
        name : "Lar dos meninos" ,
        about : "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e / ou vulnerabilidade social" ,
        whatsapp: "987654321",
        images: [
            "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" ,
            "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" 
        ].toString(),
        instructions : "Venha como se sentir a vontade e traga muito amor e paciênciapara dar" ,
        opening_hours : "Horário de visitas Das 18h até 8h" ,
        open_on_weekends : "0"
    })

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consultar somente um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id= "3"')
    console.log(orphanage)

    // Deletar dado da tabela ||| SE QUISER DELETAR MAIS IDs, SÓ COPIAR E COLAR A LINHA E INFORMAR O ID QUE QUER DELETAR
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='1'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='2'"))
})