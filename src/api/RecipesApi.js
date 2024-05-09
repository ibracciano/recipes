export async function allRecipes() {
    let api = "https://dummyjson.com/recipes"
    const response = await fetch(api)
    try {
        const recipes = response.json()
        return recipes
    } catch (error) {
        throw new Error(error)
    }

}
export async function singleRecipes({ params }) {
    let api = `https://dummyjson.com/recipes/${params.id}`
    const response = await fetch(api)
    try {
        const recipes = response.json()
        return recipes
    } catch (error) {
        throw new Error(error)
    }

}

export async function searchRecipe({ request }) {
    // console.log(request);
    const url = new URL(request.url)
    // console.log(url);
    const term = url.searchParams.get("q")
    let api = `https://dummyjson.com/recipes/search?q=${term}`
    const response = await fetch(api)
    try {
        const recipes = response.json()
        return recipes
    } catch (error) {
        throw new Error(error)
    }

}