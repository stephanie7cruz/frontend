<script>
    import { getReservationById, updateReservation } from '$services/reservationService';
    export let params;
    let reservation = {};
    let errorMessage = '';
  
    // Cargar la reserva por ID
    onMount(async () => {
      try {
        reservation = await getReservationById(params.id);
      } catch (error) {
        errorMessage = 'No se pudo cargar la reserva';
      }
    });
  
    const submitUpdate = async () => {
      try {
        await updateReservation(reservation);
        alert('Reserva actualizada exitosamente');
      } catch (error) {
        errorMessage = error.message || 'Error al actualizar la reserva';
      }
    };
  </script>
  
  <h1>Modificar reserva</h1>
  
  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}
  
  <form on:submit|preventDefault={submitUpdate}>
    <!-- Mismos campos que en la creación, pero con valores pre-llenados -->
  </form>
  