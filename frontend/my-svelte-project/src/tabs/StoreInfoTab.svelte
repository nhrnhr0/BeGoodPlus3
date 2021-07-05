<script>
    export let selectedStore;
    const base_endpoint = window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2];
    const api_endpoint = base_endpoint + '/api';

    /*function get_current_inventory() {
        selectedStore.currentInventory
    }*/
    async function get_current_inventory() {
        if (selectedStore) {
            const url = api_endpoint + '/inventory/' + encodeURIComponent(selectedStore
            .currentInventory); // + "?fields=name;alpha2Code";
            console.log(url);
            console.log(selectedStore);
            const response = await fetch(url);
            const res = await response.json();
            console.log(res)
            return res;
        }
    }
    $: {
        console.log('selectedStore', selectedStore);
        get_current_inventory().then((current_inv) => {
            console.log(current_inv);
            let entries = current_inv.entries;
            let html_markup = ``
            for (let i = 0; i < entries.length; i++) {
                debugger;

                html_markup += `<tr>`;
                html_markup += `
                    <td>
                        ${entries[i].id}
                    </td>
                    <td>
                        ${entries[i].amount}
                    </td>
                `
                html_markup += `</tr>`;
            }
            document.querySelector('#store_tbody').innerHTML=html_markup;
        });
    }
</script>

<style lang="scss">
    .info {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        direction: rtl;

        th {
            text-align: center;
            border: 1px solid #ddd;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #04AA6D;
            color: white;
        }
    }
</style>

<div>
    <table class="info">
        <thead>
            <tr>
                <th>id</th>
                <th>שם</th>
                <th>כמות</th>
                <th>ספק</th>
                <th>צבע</th>
                <th>מידע</th>
                <th>מקט</th>
            </tr>
        </thead>
        <tbody id="store_tbody">

        </tbody>
    </table>
</div>