<script>
    import { getReservations } from '$services/reservationService';
    let reservations = [];
    let filters = { date: '', service: '', client: '' };
  
    const applyFilters = async () => {
      reservations = await getReservations(filters);
    };
  
    onMount(applyFilters);
  </script>
  
  <h1>Reservas</h1>
  
  <!-- Filtros -->
  <form>
    <label>Fecha: <input type="date" bind:value={filters.date} on:change={applyFilters} /></label>
    <label>Servicio: <input type="text" bind:value={filters.service} on:change={applyFilters} /></label>
    <label>Cliente: <input type="text" bind:value={filters.client} on:change={applyFilters} /></label>
  </form>
  
  <!-- Lista de reservas -->
  <ul>
    {#each reservations as reservation}
      <li>{reservation.name} - {reservation.date} - {reservation.time}</li>
    {/each}
  </ul>
  