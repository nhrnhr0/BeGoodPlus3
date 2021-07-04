<script>
	import UpdateInventoryTab from './tabs/UpdateInventoryTab.svelte';
	export let name;
	let show_update_tab = false;

	function show_update_tab_btn(e) {
		show_update_tab = !show_update_tab;
	}
</script>



<style type="text/scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		h1 {
			color: #000000;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 400;
		}
		.tab {
			border: 1px solid red;
		}
	}

	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>


<main>
	<h1>בחר אחד מהאפשרויות</h1>
	<button>עדכון מלאי בחנות</button>
	<button on:click="{show_update_tab_btn}">הוסף מלאי לחנות</button>
	<div class="tab">
		{#if show_update_tab}
			<UpdateInventoryTab />
		{:else}
			this is not the show update tab
		{/if}
	</div>
</main>