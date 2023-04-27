const  data = [
    title: "Вызов",
    description: "Some quick ex"

]

class MovieListDTO
{

}

class RenderTemplate
{
    cardMovie;

    constructor()
    {
        this.cardMovie = `
        <div class="col-3 card">
            <div class="card" style="width: 18rem;">
                <img src="$imge class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">$title</h5>
                    <p class="card-text">$description</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
          </div>
    </div>`
    }
    renderAll(context)
    {
        for(let x=0; x < context.length; x++)
        {
            let movieContext = new MovieListDTO(
                context[x].title,
                context[x].description,
                context[x].image,
            )
            let template = this.cardMovie
                .replace("$imge", movieContext.image)
                .replace("$description", movieContext.image)
                .replace("$title", movieContext.image)

            document.getElementById("app")
                .innerHTML += template
        }
    }
}