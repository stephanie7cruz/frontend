<script lang="ts">
  import { createReservation } from '$services/reservationService';  // Asegúrate de que la ruta es correcta
  import { onMount } from 'svelte'; // Para la posible inicialización en el montaje

  // Tipo de datos para la reserva, útil si usas TypeScript
  interface Reservation {
    name: string;
    date: string;
    time: string;
    guests: number;
    notes: string;
  }

  let reservation: Reservation = { name: '', date: '', time: '', guests: 1, notes: '' };
  let errorMessage: string = '';  // Para manejar los mensajes de error

  // Función para enviar la reserva
  const submitReservation = async () => {
    try {
      await createReservation(reservation); // Llamamos al servicio para crear la reserva
      alert('Reserva creada exitosamente'); // Mensaje de éxito
      reservation = { name: '', date: '', time: '', guests: 1, notes: '' }; // Limpiar los campos
    } catch (error: any) {
      errorMessage = error.message || 'Error al crear la reserva'; // Mostrar error
    }
  };
</script>

<h1>Hacer una nueva reserva</h1>

{#if errorMessage}
  <p class="error">{errorMessage}</p>
{/if}

<form on:submit|preventDefault={submitReservation}>
  <label>Nombre: 
    <input type="text" bind:value={reservation.name} required />
  </label>
  <label>Fecha: 
    <input type="date" bind:value={reservation.date} required />
  </label>
  <label>Hora: 
    <input type="time" bind:value={reservation.time} required />
  </label>
  <label>Invitados: 
    <input type="number" bind:value={reservation.guests} required />
  </label>
  <label>Notas: 
    <textarea bind:value={reservation.notes}></textarea>
  </label>
  <button type="submit">Hacer reserva</button>
</form>
