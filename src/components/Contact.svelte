<script>
   import emailjs from '@emailjs/browser';

   let confirmation = ''
   let name;
   let email;
   let message;

 function handleSubmit(e) {
  emailjs.sendForm('gmail', 'portfolio_contact', e.target, 'hfpDOnoE4Fj1SIiHb')
      .then((result) => {
          confirmation = 'SUCCESS!', result.text
          name.value = ''
          email.value = ''
          message.value = ''
      }, (error) => {
          confirmation = 'FAILED...', error.text
      });
      
      
 }
</script>

<article id="contact" class="flex flex-col justify-center p-4 bg-[#2D3E4F] text-[#efefef] min-h-screen">
  <div class="lg:max-w-3xl lg:mx-auto">
    <h2 class="text-3xl  p-4">Contact</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <input type="hidden" name="contact_number">
      <label for="name" name="user_name" class="text-xl">Name:</label>
      <input type="text" bind:this={name} id="name" name="user_name" class="w-full p-1 px-2 rounded text-xl text-black" required/>
      <label for="email" name="user_email" class="text-xl">Email:</label>
      <input type="email" bind:this={email} id="email" name="user_email" class="w-full p-1 px-2 rounded text-xl  text-black" required/>
      <label for="message" name="message" class="text-xl">Message:</label>
      <textarea id="message" bind:this={message} name="message" class="w-full p-1 px-2 text-xl rounded  text-black" rows="6"></textarea>
      <input type='submit' class="btn text-xl bg-orange-500 text-[#13181d]  w-full">
    </form>
    <p class="alert-info text-base rounded my-2 text-center">{confirmation}</p>
  </div>
  </article>