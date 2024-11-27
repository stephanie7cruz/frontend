<script>
    export let reservation = {
      name: '',
      date: '',
      time: '',
      guests: 1,
      notes: ''
    };
  
    export let submitReservation;
  </script>
  
  <form on:submit|preventDefault={submitReservation}>
    <label>
      Nombre:
      <input type="text" bind:value={reservation.name} required />
    </label>
  
    <label>
      Fecha:
      <input type="date" bind:value={reservation.date} required />
    </label>
  
    <label>
      Hora:
      <input type="time" bind:value={reservation.time} required />
    </label>
  
    <label>
      Número de invitados:
      <input type="number" bind:value={reservation.guests} min="1" required />
    </label>
  
    <label>
      Notas:
      <textarea bind:value={reservation.notes}></textarea>
    </label>
  
    <button type="submit">Hacer reserva</button>
  </form>
  