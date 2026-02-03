
async function searchPost(id) {

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!response.ok) {
            throw new Error("Post NOT FOUND!");
        }
        const post = await response.json();
        console.log(`POST ENCONTRADO : ${post.title.toUppercase()}`);

    } catch (error) {

        console.log("El post no pudo ser hallado!!!");



    }


}
searchPost(6)