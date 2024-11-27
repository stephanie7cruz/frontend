<script>
    import { deleteReservation } from '$services/reservationService';
    export let params;
    let errorMessage = '';
  
    const cancelReservation = async () => {
      try {
        await deleteReservation(params.id);
        alert('Reserva cancelada');
      } catch (error) {
        errorMessage = 'Error al cancelar la reserva';
      }
    };
  </script>
  
  <h1>Cancelar reserva</h1>
  
  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}
  
  <button on:click={cancelReservation}>Cancelar reserva</button>
  