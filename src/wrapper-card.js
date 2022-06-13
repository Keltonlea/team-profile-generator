// Card wrapper templating function
const cardWrapper = (cards) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
  </head>
  <body class="pb-5">
    
    <!-- Header -->
    <header class="bg-dark py-4 mb-5">
      <h1 class="text-center text-white">
        Team Profile
      </h1>
    </header>
    <!-- Profile Cards Container -->
    <main>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">   
          ${cards}       
        </div>
      </div>
    </main>
  </body>
  </html>
`;

module.exports = cardWrapper;