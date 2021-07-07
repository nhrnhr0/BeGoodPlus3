<script>
    import {
        getContext
    } from 'svelte';
    import Popup from './targetInvModal.svelte';
    const {open} = getContext('simple-modal');
    export let selectedStore;
    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;

    const showPopup = () => {
        open(Popup, {
            selectedStore: selectedStore,
        });
    };
</script>

<section>
    <button class="btn" on:click={showPopup}>ערוך מטרות</button>
    <br />

    <div id="state">
        {#if opening}
                <p>opening modal...</p>
        {:else if opened}
            <p>opened modal!</p>
        {:else if closing}
            <p>closing modal...</p>
        {:else if closed}
            <p>closed modal!</p>
        {/if}
        </div>
    </section>    
    <style lang="scss">
        section {
            padding-top: 0.5em;
        }         
        #state {
            position: absolute;
            top: 0;
            right: 0;
            opacity: 0.33;
            font-size: 0.8em;
        }



        .btn {
            margin:30px;
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            &:hover {
                color: #494949 !important;
                border-radius: 50px;
                border-color: #494949 !important;
                transition: all 0.3s ease 0s;
            }
        }
    </style>