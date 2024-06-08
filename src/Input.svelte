<script>
    import MovieComponent from "./Movie.svelte";

    const key = "422350ff";
    let movieSearch = "";
    let movies = [];
    let loading = false;

    const handleInput = (e) => {
        movieSearch = e.target.value;
    };

    /* declaración reactiva y fetching datos */
    const handleClick = () => {
        loading = true;

        fetch(`https://www.omdbapi.com/?s=${movieSearch}&apikey=${key}`)
            .then((res) => res.json())
            .then((apiResponse) => {
                movies = apiResponse.Search || [];
                loading = false;
            });
    };
</script>

<div class="container">
    <input
        on:input={handleInput}
        value={movieSearch}
        placeholder="Busca tu película o serie favorita"
        type="text"
        name="movie-search"
        id="movie-search"
    />
    <button on:click={handleClick}>Buscar</button>
</div>

{#if loading}
    <strong>Buscando ...</strong>
{:else}
    <main>
        {#each movies as { Title, Poster, Year }, i}
            <MovieComponent
                index={i}
                title={Title}
                poster={Poster}
                year={Year}
            />
        {:else}
            <strong>No hemos encontrado resultados tu búsqueda</strong>
        {/each}
    </main>
{/if}

<style>
    .container {
        display: flex;
        justify-content: center;
        padding: 40px;
        background-color: #f9674395;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
    }

    input[type="text"] {
        flex: 1;
        padding: 10px 20px;
        font-size: 24px;
        border: none;
        border-radius: 10px 0 0 10px;
        background-color: #fff;
        color: #333;
        transition: all 0.3s ease-in-out;
    }

    input[type="text"]:focus {
        outline: none;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        background-color: #fff;
    }

    input[type="text"]::placeholder {
        color: #ccc;
    }

    button {
        padding: 10px 20px;
        font-size: 24px;
        font-weight: 500;
        border: none;
        border-radius: 0 10px 10px 0;
        background-color: #f96743;
        color: #333;
        transition: all 0.2s ease-in-out;
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        font-weight: bold;
        background-color: #f96743;
    }

    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
