<script>
      import {api_endpoint} from '../utils/globalStore';
      import {getData} from '../utils/fetcher';

    export let selectedStore;
    let response_value;
    let response;
    if (selectedStore) {
            console.log('selectedStore:' ,selectedStore)
            const url = api_endpoint + '/inventory/' + encodeURIComponent(selectedStore.targetInventory);
            response = getData(url);
            response.subscribe(value => {
                value.then(function (res) {
                    response_value = res;
                });
            });
        }
  </script>
  
  <style>
    h2 {
          font-size: 2rem;
          text-align: center;
      }
  </style>
  
    {#if response_value}
      <h2>עריכת מטרות  <br> {selectedStore.name}</h2>
      <table class="edit">
        <thead>
            <tr>
                <th>id</th>
                <th>שם</th>
                <th>כמות</th>
                <th>צבע</th>
                <th>מידה</th>
                <th>מקט</th>
                <th>ספק</th>
            </tr>
        </thead>
        <tbody id="store_tbody">
                {#each response_value.entries as row}
                <tr>
                    <td>
                        {row.id}
                    </td>
                    <td>
                        {row.stock.product.name}
                    </td>
                    <td>
                        {row.amount}
                    </td>
                    <td>
                        {row.stock.productColor.name}
                    </td>
                    <td>
                        {row.stock.productSize.size}
                    </td>
                    <td>
                        {row.stock.__str__}
                    </td>
                    <td>
                        {row.stock.provider.name}
                    </td>
                </tr>
                {/each}
                
            
        </tbody>
    </table>
    {:else}  
      store is not selected
    {/if}
    
