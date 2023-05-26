interface htmlString {
  orderId: string
  orderItems: any[]
}

export const htmlString = ({ orderId, orderItems }: htmlString) => {
  let orderItemsHtml = ''
  for (const orderItem of orderItems) {
    orderItemsHtml += `
    <tr>
    <td style="width: 50px; border: 1px solid black; font-size: 1.2rem;">${orderItem.quantity}</td>
    <td style="width: 228px; border: 1px solid black; font-size: 1.2rem;">${orderItem.food.name}</td>
    </tr> `
  }

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Curry Club Order Confirmation</title>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link href="main.css" rel="stylesheet" />
  </head>
  <body
    style="
      position: relative;
      margin: 0 auto;
      width: 100%;
      overflow-y: hidden;
      scroll-behavior: smooth;
      font-family: 'Lato', sans-serif;
    "
  >
    <header>
      <div style="background: #d70567; position: relative">
        <img
          src="https://curryclublogo.netlify.app/curry_club_white_sm.png"
          alt="Curry Club Logo"
          style="
            width: auto;
            height: 3.5rem;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </div>
    </header>
    <main style="margin-top: 3rem">
      <img
        src="https://curryclublogo.netlify.app/bike.png"
        alt="Delivery Bike"
        style="
          width: auto;
          height: 3.5rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 3rem;
        "
      />
      <h1
        style="
          text-align: center;
          line-height: 2rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 0.5rem;
          padding-left:1rem;
          padding-right:1rem;
        "
      >
        Your order is confirmed
      </h1>
      <p
        style="
          text-align: center;
          font-size: 1.2rem;
          margin: 0;
          margin-top: 3rem;
        "
      >
        Your order number is:
      </p>
      <p
        style="
          display: block;
          margin: 0 auto;
          padding: 0.5rem;
          background: #d70567;
          color: white;
          text-align: center;
          width: 17rem;
          font-size: 1.2rem;
          font-weight: 600;
        "
      >
        ${orderId}
      </p>

      <table style="margin: 0 auto; text-align: center; margin-top: 2.5rem">
        <tr>
          <th style="width: 50px; font-size: 1.2rem; border: 1px solid black">
            Qty
          </th>
          <th style="width: 228px; font-size: 1.2rem; border: 1px solid black">
            Item
          </th>
        </tr>
        ${orderItemsHtml}
      </table>

      <p
        style="
          text-align: center;
          font-size: 1.2rem;
          margin: 0;
          margin-top: 2rem;
          margin-bottom: 3rem;
        "
      >
        Thanks for your order!
      </p>
    </main>
  </body>
</html>
`
}
