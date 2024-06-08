<script>
    export let index, title, year, poster;
</script>

<article {title}>
    <span>#{index}</span>
    <img src={poster} alt={title} loading="lazy" />
    <h3>{title}</h3>
    <p>Año: {year}</p>
</article>

<style>
    article {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        min-height: 350px;
        width: 500px;
        margin: 20px;
        display: inline-block;
        text-align: center;
        transition: box-shadow 0.3s;
    }

    article:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    article span {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
        display: block;
    }

    article img {
        width: 80%;
        height: 80%;
        object-fit: cover;
        border-radius: 2px;
    }

    article h3 {
        font-size: 2.5rem;
        margin: 10px 0 2px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    article p {
        font-size: 1.5rem;
        color: #666;
        margin: 5px 0 0 0;
    }
</style>
