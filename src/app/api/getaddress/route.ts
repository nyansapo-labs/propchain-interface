import axios from "axios";

export async function POST(req: Request, res: Response) {
  const myHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const { latitude, longitude } = await req.json();

  const urlencoded = new URLSearchParams();
  urlencoded.append("long", "-1.647"); //String(longitude));
  urlencoded.append("lat", "6.6500"); //String(latitude));

  const formData = new FormData();
  formData.set("long", String(longitude));
  formData.set("lat", String(latitude));

  const requestOptions: any = {
    headers: myHeaders,
    data: urlencoded,
    // redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://ghanapostgps.sperixlabs.org/get-address",
      // requestOptions
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    return Response.json({ result });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "An error occurred" },
      {
        status: 500,
      }
    );
  }
}
