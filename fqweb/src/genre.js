load("config.js");
function execute() {
	// const category_url = "https://fanqienovel.com/api/author/book/category_list/v0/?gender=-1";
    const hot_genres_url = "https://fanqienovel.com/api/author/library/book_list/v0/?page_count=18&page_index={{page}}&category_id={{category_id}}&creation_status=-1&word_count=-1&book_type=-1&sort=0";
    let response = fetch("https://fanqienovel.com/api/author/book/category_list/v0");
    let data = response.json().data;

    let genres = [];
    data.forEach((e) => {
        genres.push({
            title: e.name,
            input: hot_genres_url.replace("{{category_id}}", e.category_id),
            script: "gen.js",
        });
    });

    return Response.success(genres);
}
