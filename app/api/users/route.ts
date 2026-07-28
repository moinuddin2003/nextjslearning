import { NextResponse } from "next/server"

let users = [
        {
            "id": 1,
            "name": "Muhammad",
            "email":"muhammad@gmail.com",
            "age" : 20
        },
        {
            "id": 2,
            "name": "Moinuddin",
            "email":"moin@gmail.com",
            "age" : 30
        }
    ]
export async function GET(){
    return NextResponse.json(users);
}

 import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      {
        message: "User not authenticated",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json(
    {
      status: "Created Successfully",
      data: body,
    },
    {
      status: 201,
    }
  );
}

//Postman mein header mein  key mein cookie or Value mein token=ye jo token backend se arha he (Api chalane keliye. THis is the task of API WITH AUTHENTICATION given to us by Sir Ashir)
 