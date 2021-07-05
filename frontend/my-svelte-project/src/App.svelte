<script>
	
	import AutoComplete from "simple-svelte-autocomplete";
	import StoreInfoTab from "./tabs/StoreInfoTab.svelte"
	const base_endpoint = window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2];
	const api_endpoint = base_endpoint + '/api';

	let selectedStore;
	async function searchStore(keyword) {
		const url = api_endpoint + '/stores/' + encodeURIComponent(keyword);// + "?fields=name;alpha2Code";
		console.log(url);
		const response = await fetch(url);
		return await response.json();
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
			font-size: 3em;
			font-weight: 400;
		}
		.tab {
			border: 1px solid rgb(0, 253, 55);
		}
		
	}

	main :global(.autocomplete-input.svelte-77usy.svelte-77usy) {
		text-align: right;
	}

	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>


<main>
	<h1>dashboard</h1>
	<AutoComplete placeholder="חנות" searchFunction={searchStore} bind:selectedItem={selectedStore} labelFieldName="name"
		maxItemsToShowInList="10" delay=200 localFiltering=false />	
	<div class="tab">
		<StoreInfoTab selectedStore={selectedStore}/>
	</div>
</main>