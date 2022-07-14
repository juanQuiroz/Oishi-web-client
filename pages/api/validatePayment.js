import axios from "axios";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  if (req.method === "POST") {
    const body = req.body;

    try {
      const response = await axios.post(
        "https://api.micuentaweb.pe/api-payment/V4/Charge/validatePayment",
        body,
        {
          headers: {
            // "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization:
              "Basic NTcxODA2ODU6dGVzdHBhc3N3b3JkX0R1aXRURTBJaHhZMjhTemtjUXkyWVBodXdjVXUzNzdVeUdDWXl0YzE5YlROZA==",
            // "Basic NTcxODA2ODU6cHJvZHBhc3N3b3JkX082ZlgyaHM0bTRXdFRzUE5SVDdZblo2N3d4OUZmc0d5bHl4aEt4QU9mZEhvbQ==",
          },
        },
      );

      console.log("ApiNextJS - TRY -> ", response);

      res.status(200).send(response.data);
    } catch (e) {
      console.log("ApiNextJS - CATCH ->", e);
      res.status(500).json(e);
    }
  }
}
