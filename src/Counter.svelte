<script>
    export let initCounter = 0;
    let counter = initCounter;

    function handleClickIncrement() {
        counter++;
    }
    function handleClickDecrement() {
        counter--;
    }
</script>

<div class="container-counter">
    <button on:click={handleClickDecrement} class="btn btn-decrement"
        >Quitar</button
    >
    <span class="counter-value">{counter}</span>
    <button on:click={handleClickIncrement} class="btn btn-increment"
        >Añadir</button
    >
</div>

<style>
    .container-counter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background: #ddd;
        margin-bottom: 1.5rem;
    }

    .counter-value {
        font-size: 2rem;
        font-weight: bold;
        margin: 0 16px;
    }

    .btn {
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }

    .btn-decrement {
        background-color: #ffc107;
    }
    .btn-decrement:hover {
        background-color: #dda702;
    }

    .btn-increment {
        background-color: #4caf50;
    }

    .btn-increment:hover {
        background-color: #3e8e41;
    }
</style>
