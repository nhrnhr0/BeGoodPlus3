import { writable } from 'svelte/store'
export const api_endpoint = window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2] + '/api';
export const modal = writable(null);