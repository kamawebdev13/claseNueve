
async function obtenerVengador() {

    try {

        const response = await (`https://akabab.github.io/superhero-api/api/id/346.json`)
        if (!response.ok) {
            throw new Error("AVENGER NOT FOUND!");
            const vengador = await response.json();

            const nombreReal = vengador.biography.fullname;
            const inteligencia = vengador.powerstats.intelligence;

            console.log(`Nombre Real: ${nombreReal}`);
            console.log(`Inteligencia: ${inteligencia}`);

        }

    } catch (error) {

        console.log("Error al contactar con la base de datos de Avengers!!!");



    }


}